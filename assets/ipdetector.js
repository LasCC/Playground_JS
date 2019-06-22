window.onload = function () {
    let apikey = 'e765f704ed22149780f8d19758009a2ad5fcb0ce579bff00df75bcd2';
    let ip = document.querySelector('#ip')
    let paysName = document.querySelector('#paysName');
    let flagCountry = document.querySelector('#flagCountry');
    let fai = document.querySelector('#fai');

    function searchWeather(searchText) {
        fetch(`https://api.ipdata.co/${searchText}?api-key=${apikey}`).then(result => {
            return result.json();
        }).then(result => {
            init(result);
        });
    }

    function searchMyip(myIP) {
        fetch(`https://api.ipdata.co/?api-key=${apikey}`).then(result => {
            return result.json();
        }).then(result => {
            init(result);
        });
    }

    function init(resultServer) {
        console.log(resultServer);
        ip.textContent = resultServer.ip;
        paysName.textContent = resultServer.country_name + " " + resultServer.country_code;
        fai.textContent = resultServer.organisation;
        flagCountry.src = resultServer.flag;
        latitude = resultServer.latitude;
        longitude = resultServer.longitude;

        const map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('You have been cucked.<br> faut payer maintenant.')
            .openPopup();
    };

    document.getElementById('recherchebtn').addEventListener('click', () => {
        let searchText = document.getElementById('rechercheform').value;
        document.getElementById('rechercheDisplay').className = 'my-3 p-3 bg-white rounded shadow-sm';
        document.getElementById('mapReveal').className = 'card text-center shadow bg-white rounded mt-4';
        if (searchText)
            searchWeather(searchText);

    });
    document.getElementById('monIp').addEventListener('click', () => {
        let myIP = document.getElementById('rechercheform');
        document.getElementById('rechercheDisplay').className = 'my-3 p-3 bg-white rounded shadow-sm';
        document.getElementById('mapReveal').className = 'card text-center shadow bg-white rounded mt-4';
        if (myIP)
            searchMyip(myIP);
    });
}