window.addEventListener("load", function() {
    let long;
    let lat;
    let description = document.querySelector('.description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationHabitant = document.querySelector('.location-habitant');
    let humidite = document.querySelector('.humidite');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const debug = "https://cors-anywhere.herokuapp.com/";
            const api = `${debug}https://api.darksky.net/forecast/f995065a7e176717f6f0e75b5234cc35/${lat},${long}?lang=fr&units=si&exclude=hourly,flags,offset`;

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    const {summary} = data.daily;
                    const {temperature, humidity} = data.currently;
                    temperatureDegree.textContent = temperature;
                    description.textContent = summary;
                    locationHabitant.textContent = data.timezone;
                    humidite.textContent = humidity;
                })
        })
    } 
});

function timedRefresh(timeoutReload) {
	setTimeout("location.reload(true);",timeoutReload);
}

window.onload = timedRefresh(50000);
