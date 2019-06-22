window.onload = function () {
    let apikey = '24d050786c748773a0cd6466a78d6474';
    let unit = 'metric';
    let searchMethod = '';
    let weatherDescription = document.querySelector('#weatherDescription');
    let ville = document.querySelector('#ville');
    let weathertemperature = document.querySelector('#weathertemperature');
    let humidite = document.querySelector('.humidite');

    function searchWeather(searchTerm) {
        fetch(`https://api.openaq.org/v1/latest?city= + city + &limit=1&parameter=pm10, true`).then(result => {
            return result.json();
        }).then(result => {
            init(result);
        });
    }

    function init(resultServer) {
        console.log(resultServer);
        
    };

    document.getElementById('recherchebtn').addEventListener('click', () => {
        let searchTerm = document.getElementById('rechercheform').value;
        if (searchTerm)
            searchWeather(searchTerm);
    });
}