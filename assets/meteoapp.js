window.onload = function () {
    let apikey = '24d050786c748773a0cd6466a78d6474';
    let unit = 'metric';
    let searchMethod = '';
    let weatherDescription = document.querySelector('#weatherDescription');
    let ville = document.querySelector('#ville');
    let weathertemperature = document.querySelector('#weathertemperature');
    let weathertemperatureMin = document.querySelector('#weathertemperatureMin')
    let weathertemperatureMax = document.querySelector('#weathertemperatureMax')

    function searchWeather(searchText) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q${searchMethod}=${searchText},fr&APPID=${apikey}&units=${unit}`).then(result => {
            return result.json();
        }).then(result => {
            init(result);
        });
    }

    function init(resultServer) {
        console.log(resultServer);
        ville.textContent = resultServer.name;
        weatherDescription.textContent = resultServer.weather[0].description;
        weathertemperature.textContent = resultServer.main.temp + " °C";
        weathertemperatureMin.textContent = resultServer.main.temp_min + " °C min ☹️";
        weathertemperatureMax.textContent = resultServer.main.temp_max + " °C max 🔥";
    };

    document.getElementById('recherchebtn').addEventListener('click', () => {
        let searchText = document.getElementById('rechercheform').value;
        if (searchText)
            searchWeather(searchText);
    });
}

