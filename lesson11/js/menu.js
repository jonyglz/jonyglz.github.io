const day = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.addEventListener("load",()=>{
    const hambutton = document.querySelector(".ham");
    const mainnav = document.querySelector("#navigation");

    hambutton.addEventListener("click",()=>{mainnav.classList.toggle("responsive")},false);

});
window.addEventListener("load", (event)=>{
    // CODE FOR THE FOOTER DATE IN THE FORMAT "DAY, MONTH YEAR"
    const lu=document.querySelector("#lastupdated");

    let currentDay = new Date().getDay();
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    lu.textContent="Last updated: "+day[currentDay]+" "+new Date().getDate()+", "+month[currentMonth]+" "+currentYear;
    // lu.textContent = document.lastModified;

    // CODE FOR THE PANCAKE ADD
    let currentdate  = new Date();
    let pancake = document.getElementById("image2");
    // console.log(pancake);
    if(currentdate.getDay()  !==5){
        pancake.style.display="none";
    }
    else{
        pancake.style.display="grid";
    };

});

const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        const towns = jsonObject["towns"];
        console.table(jsonObject);
        for (let i=0;i<towns.length; i++){

            if (towns[i].name=="Preston"||towns[i].name=="Fish Haven"||towns[i].name=="Soda Springs"){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let h4 = document.createElement("h4");
                let h5 = document.createElement("h4");
                let h6 = document.createElement("h4");
                let image = document.createElement("img");
                
                card.setAttribute("class", "index_card")
                h2.textContent = towns[i].name;
                p1.textContent = towns[i].motto;
                h4.textContent = "Year founded: "+towns[i].yearFounded;
                h5.textContent = "Population: "+towns[i].currentPopulation;
                h6.textContent = "Annual rain: "+towns[i].averageRainfall;
                image.setAttribute("src","images/"+towns[i].photo);
                image.setAttribute("alt", towns[i].name);

                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(h4);
                card.appendChild(h5);
                card.appendChild(h6);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }   
        }
    });

    // Weather summary for Preston

    const requestPreston = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

    fetch (requestPreston)
        .then(function(response){
            return response.json();
        })
        .then(function(preston){
            console.table(preston);
            document.getElementById("currently").textContent=preston.weather[0].main;
            document.getElementById("high").textContent=Math.round(preston.main.temp_max);
            document.getElementById("humidity").textContent=preston.main.humidity;
            document.getElementById("wind_speed").textContent=Math.round(preston.wind.speed);
        });

    // Weather summary for Soda Springs

    const requestSoda = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

    fetch (requestSoda)
        .then(function(response){
            return response.json();
        })
        .then(function(soda){
            console.table(soda);
            document.getElementById("currently-s").textContent=soda.weather[0].main;
            document.getElementById("high-s").textContent=Math.round(soda.main.temp_max);
            document.getElementById("humidity-s").textContent=soda.main.humidity;
            document.getElementById("wind_speed-s").textContent=Math.round(soda.wind.speed);
        });

    // Weather summary for Fish Haven

    const requestFish = "https://api.openweathermap.org/data/2.5/weather?id=5593814&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

    fetch (requestFish)
        .then(function(response){
            return response.json();
        })
        .then(function(fish){
            console.table(fish);
            document.getElementById("fish-currently").textContent=fish.weather[0].main;
            document.getElementById("fish-high").textContent=Math.round(fish.main.temp_max);
            document.getElementById("fish-humidity").textContent=fish.main.humidity;
            document.getElementById("fish-wind_speed").textContent=Math.round(fish.wind.speed);
        });        

    // Five day forecast Preston

    const requestPreston5 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

    fetch (requestPreston5)
        .then(function(response){
            return response.json();
        })
        .then(function(preston5){
            console.table(preston5);
            let only18hourlist = preston5.list.filter(preston5 => preston5.dt_txt.includes("18:00:00"));
            console.table(only18hourlist);

            for (let i=0; i<only18hourlist.length; i++){

                let w = only18hourlist[i].dt_txt;
                console.log(w);
                const x = w.split(" ");
                console.log(x);
                let y = new Date(x);
                console.log(y);
                let z = y.getDay();
                console.log(z);

                let currentday = i+1;
                document.getElementById("icon"+currentday).setAttribute("src", "https://openweathermap.org/img/w/"+only18hourlist[i].weather[0].icon+".png");
                document.getElementById("icon"+currentday).setAttribute("alt", only18hourlist[i].weather[0].description+" "+only18hourlist[i].main.temp);
                document.getElementById("span"+currentday).textContent = only18hourlist[i].main.temp+"°F";
                document.getElementById("day-forecast"+currentday).textContent = day[z];
            }
        });
    
    // Five day forecast Soda Springs

    const requestSoda5 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

    fetch (requestSoda5)
        .then(function(response){
            return response.json();
        })
        .then(function(soda5){
            console.table(soda5);
            let only18hourlist = soda5.list.filter(soda5 => soda5.dt_txt.includes("18:00:00"));
            console.table(only18hourlist);

            for (let i=0; i<only18hourlist.length; i++){

                let w = only18hourlist[i].dt_txt;
                console.log(w);
                const x = w.split(" ");
                console.log(x);
                let y = new Date(x);
                console.log(y);
                let z = y.getDay();
                console.log(z);

                let currentday = i+1;
                document.getElementById("soda-icon"+currentday).setAttribute("src", "https://openweathermap.org/img/w/"+only18hourlist[i].weather[0].icon+".png");
                document.getElementById("soda-icon"+currentday).setAttribute("alt", only18hourlist[i].weather[0].description+" "+only18hourlist[i].main.temp);
                document.getElementById("soda-span"+currentday).textContent = only18hourlist[i].main.temp+"°F";
                document.getElementById("day-forecast"+currentday).textContent = day[z];
            }
        });

    // Five day forecast Fish Haven

    const requestFish5 = "https://api.openweathermap.org/data/2.5/forecast?id=5593814&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

    fetch (requestFish5)
        .then(function(response){
            return response.json();
        })
        .then(function(fish5){
            console.table(fish5);
            let only18hourlist = fish5.list.filter(fish5 => fish5.dt_txt.includes("18:00:00"));
            console.table(only18hourlist);

            for (let i=0; i<only18hourlist.length; i++){

                let w = only18hourlist[i].dt_txt;
                console.log(w);
                const x = w.split(" ");
                console.log(x);
                let y = new Date(x);
                console.log(y);
                let z = y.getDay();
                console.log(z);

                let currentday = i+1;
                document.getElementById("fish-icon"+currentday).setAttribute("src", "https://openweathermap.org/img/w/"+only18hourlist[i].weather[0].icon+".png");
                document.getElementById("fish-icon"+currentday).setAttribute("alt", only18hourlist[i].weather[0].description+" "+only18hourlist[i].main.temp);
                document.getElementById("fish-span"+currentday).textContent = only18hourlist[i].main.temp+"°F";
                document.getElementById("day-forecast"+currentday).textContent = day[z];
            }
        });        

