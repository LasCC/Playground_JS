window.addEventListener("load", function () {
    let videoFrame = document.querySelector('#videoFrame');
    const api = `https://api.jsonbin.io/b/5c96020c2d33133c401b8cc7/1`;
    i = 0;
    
    fetch(api)
        .then(reponse => {
            return reponse.json();
        })
        .then(data => {
            console.log(data)
            const {lien} = data;
            videoFrame.src = lien[i];
            document.querySelector('#btnSuivant').addEventListener('click', function () {
                document.getElementById("videoFrame").src = lien[i++];
            });
            document.querySelector('#btnPrecedent').addEventListener('click', function () {
                document.getElementById("videoFrame").src = lien[i--];
            });
        });  
   })
