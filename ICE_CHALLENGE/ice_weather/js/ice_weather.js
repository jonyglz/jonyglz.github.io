const requestURL="https://api.openweathermap.org/data/2.5/weather?zip=83440&appid=e02a02a3f4fdea6d2d21f6a5078c2510&units=imperial";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        const weather = jsonObject;
        console.table(jsonObject);

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement("p");
        let icon = document.createElement("img");

        h2.textContent = "The weather in "+weather.name+" is:";
        p.textContent = Math.round(weather.main.temp_min);
        icon.setAttribute("src", "https://openweathermap.org/img/w/"+weather.weather[0].icon+".png");
        icon.setAttribute("alt", weather.weather[0].description);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(icon);

        document.querySelector('.cards').appendChild(card);
        
        // for (let i=0;i<weather.length; i++){
        //     let card = document.createElement('section');
        //     let h2 = document.createElement('h2');
        //     // let p1 = document.createElement('p');
        //     // let p2 = document.createElement("p");
        //     // let image = document.createElement("img");

        //     h2.textContent = weather[i].name;
        //     // p1.textContent = "Date of Birth: " + weather[i].birthdate;
        //     // p2.textContent = "Place of Birth: " + weather[i].birthplace;
        //     // image.setAttribute("src",weather[i].imageurl);
        //     // image.setAttribute("alt", weather[i].name + " " + weather[i].lastname + "-" + weather[i].order);

        //     card.appendChild(h2);
        //     // card.appendChild(p1);
        //     // card.appendChild(p2);
        //     // card.appendChild(image);

        //     document.querySelector('div.cards').appendChild(card);
        // }
    });

