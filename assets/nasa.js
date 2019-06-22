window.addEventListener("load", function () {
    let titreImage = document.querySelector('#titreImage');
    let dateImage = document.querySelector('.dateImage');
    let copyImage = document.querySelector('.copyImage');
    let textExplain = document.querySelector('.textExplain');
    let imageDay = document.querySelector("#imageDay");
    
    const api = `https://api.nasa.gov/planetary/apod?api_key=pDfjb0qHeUIRbf9gm0KD0GLYZqosbwPYeiO0C3pk`;

fetch(api)
    .then(reponse => {
        return reponse.json();
    })
    .then(data => {
        console.log(data)
        const {title, date, url, copyright, explanation} = data;
        titreImage.textContent = title;
        dateImage.textContent = date;
        copyImage.textContent = copyright;
        textExplain.textContent = explanation;
        imageDay.src = url;
    })
})

const element =  document.querySelector('.btn btn-primary')
element.classList.add('animated', 'bounceOutLeft')