window.addEventListener("load",()=>{
    const hambutton = document.querySelector(".ham");
    const mainnav = document.querySelector("#navigation");

    hambutton.addEventListener("click",()=>{mainnav.classList.toggle("responsive")},false);

});
window.addEventListener("load", (event)=>{
    const lu=document.querySelector("#lastupdated");
    lu.textContent = document.lastModified;
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

