const requestPreston = "https://www.ahfx.com/events.php";

fetch (requestPreston)
    .then(function(response){
        return response.json();
    })
    .then(function(events){
        console.table(events);
        document.getElementById("rescheduled").textContent=events[0].tags[1];
        document.getElementById("type_event").textContent=events[0].tags[2];
        document.getElementById("event_name").textContent=events[0].properties.name;
        document.getElementById("date").textContent=events[0].properties.start+" "+events[0].properties.end;
        document.getElementById("type").textContent="Event type: "+events[0].type;
    });