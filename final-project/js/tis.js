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

});

// Code for the temples json

const requestTemples="js/temples.json";

fetch(requestTemples)
    .then(function(response){
        return response.json();
    })
    .then(function(temples){
        console.table(temples);
        for (let i=0;i<temples.length; i++){

            if (temples[i].city=="Idaho Falls"||temples[i].city=="Rexburg"||temples[i].city=="Mexico City"||temples[i].city=="San Antonio"){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h4 = document.createElement("h4");
                let image = document.createElement("img");
                let clock = document.createElement("i");
                let phone = document.createElement("i");
                let address = document.createElement("i");
                let announce = document.createElement("i");
                let p1 = document.createElement('p');
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let p4 = document.createElement("p");
                let div = document.createElement("div");
                
                card.setAttribute("class", "index_card");
                h4.textContent = "Temples available";
                h2.textContent = temples[i].name;
                clock.setAttribute("class","fas fa-history");
                phone.setAttribute("class","fas fa-phone-alt");
                address.setAttribute("class","fas fa-map-marker-alt");
                announce.setAttribute("class","fas fa-scroll");
                p1.textContent =temples[i].templeId;
                image.setAttribute("src",temples[i].imageurl);
                image.setAttribute("alt",temples[i].name);
                p2.textContent = temples[i].address1+", "+temples[i].city+", "+temples[i].state
                p3.textContent = "Phone: "+temples[i].phone
                p4.textContent = "Announced: "+temples[i].history.announced

                card.appendChild(image);
                card.appendChild(h4);
                card.appendChild(h2);
                card.appendChild(div);
                div.appendChild(clock);
                div.appendChild(p1);
                div.appendChild(address);
                div.appendChild(p2);
                div.appendChild(phone);
                div.appendChild(p3);
                div.appendChild(announce);
                div.appendChild(p4);

                document.querySelector('div.cards').appendChild(card);
            }   
        }
    });    

   

