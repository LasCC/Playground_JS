const droitAcces = true;
const prenom = 'Ludovic';

if (droitAcces) {
    console.log('Welcome ' + prenom + ' entre dans la danse avec oam  🧕');
} else {
    console.log('Entre pas ça va pas être possible 🤣');
}

function test() {
    alert('Bonjour 🤷‍♂️ 👀');
}

function test1() {
    alert('A plus 🙋‍♀ 👀');
}

function test2() {
    document.getElementById("alert").innerHTML =
        `
    <div class="alert alert-danger" role="alert">
    🖕🏻
    </div>
   `;
}

const number = "123";
const parsed = parseInt(number);

console.log(parsed + 1); // 124
console.log(number + 1); // 1231

let ouinon = 10;
while (ouinon > 0) {
    ouinon = ouinon - 1;
    console.log(ouinon); //ça va print un decompte de 40
}


// Liste
const prenoms = ['Bernard', 'Michel', 'Albert'];

console.log(prenoms[0]);

function radiosexe(prenoms) {
    console.log('Bonjour ' + prenoms + ' 🤑 😲 ☹️');
    console.log('Comment allez-vous ? 🤑 😲 ☹️');
    return "Coucou " + prenoms;
}

radiosexe();


// Addition
function somme(x, y) {
    console.log(x - y);
}
const fonction = somme(1998, 2019);
console.log(fonction);

// ForEach

const liste = ['😜', '😡', '🤡', '🔥'];

liste.forEach(function (element) {
    console.log(element + "|" + "Hola muchachos");
});

// Objet
const personne = {
    nom: " Michel 👨‍",
    prenomm: " Platini 👩‍💻 👨‍💻",
    departement: 78,
    age: 23,
    coucou: function () {
        console.log("Hola! 👨‍🏭" + this.nom + this.prenomm);
    },
    nomcomplet: function () {
        return this.prenomm + this.nom;
    },
};

personne.coucou();
console.log(personne.nomcomplet());

//pour cloner l'objet

const bernard = Object.create(personne);
bernard.prenomm = " 👩‍🚒";
bernard.nom = " 🙅‍";

bernard.coucou();

//Login popup
window.onload = function(){
    let c = document.getElementById("loginbtn");
    c.addEventListener("click", function() {
        document.querySelector('.bgdark').style.display = 'flex';
    })
    document.querySelector('#close').addEventListener('click', function () {
        document.querySelector('.bgdark').style.display = 'none';
    });
    //Creer un boutton qui permet de remplir un login/form 
    document.querySelector('#remplir').addEventListener('click', function () {
        document.getElementById("exampleInputEmail1").value = 'monsupermaildeouf@gmail.com';
    });
    //Creer un boutton qui permet de remplir un login/form 
    document.querySelector('#remplir').addEventListener('click', function () {
        document.getElementById("exampleInputPassword1").value = 'motdepassesupermegacool';
    });


//Anime js
// anime({
//     targets: '.login',
//     direction: 'alternate',
//     loop: true,
//     duration: 5000,
//     rotate: 1000,
// });

// anime({
//     targets: 'svg',
//     rotate: {
//         value: 360,
//         duration: 1800,
//         easing: 'easeInOutSine'
//     },
//     scale: {
//         value: 2,
//         duration: 1600,
//         delay: 800,
//         easing: 'easeInOutQuart'
//     },
//     delay: 250,
//     loop: true
// });

// Cours numéro deux
const pays = [{
        capitale: 'Paris 🌂',
        nom: 'France',
    },
    {
        capitale: 'Londres 🤴🏻',
        nom: 'Royaume-Uni'
    },
    {
        capitale: 'Tunis 👳🏼‍',
        nom: 'Tunisie'
    }
];


//Avec un forEach
pays.forEach(function (element) {
    console.log(element.nom + " a pour capitale " + element.capitale);
});


//Deuxième technique
for (let e in pays) {
    console.log(`La capitale de ${pays[e].nom} est ${pays[e].capitale}`)
};


// // Ajouter un texte en JS
// const paragraphe = document.createElement('p')
// paragraphe.innerText = "Texte ajouter en javascript"
// document.body.appendChild(paragraphe)


//Ajouter des listes en JS version forEach
const paysSelector = document.body.children[1];
const ul = document.createElement("ul");
paysSelector.appendChild(ul); //Recupere les pays

pays.forEach(function (element) {
    const objt = document.createElement("li");
    objt.innerText = element.capitale + ' | ' + element.nom;
    objt.className = "list-group-item list-group-item-action"
    ul.appendChild(objt);
});

//Ajouter des listes en JS sans boucle
const ulElement = document.createElement('ul');

const li1Element = document.createElement('li');
li1Element.innerText = 'Element 1 🤑';
li1Element.className = "list-group-item list-group-item-action"
ulElement.appendChild(li1Element)

const li2Element = document.createElement('li');
li2Element.innerText = 'Element 2 😲';
li2Element.className = "list-group-item list-group-item-action active"
ulElement.appendChild(li2Element)

document.querySelector('body').appendChild(ulElement)

//Ajouter des listes en JS version for
const UlElement = document.createElement('ul');

let liElement;

for (let i = 1; i < 6; i++) {
    liElement = document.createElement('li');
    liElement.innerText = 'Element ' + i + ' 🤷';
    liElement.className = 'list-group-item list-group-item-action'
    ulElement.appendChild(liElement)
};

//Cliquer sur le titre pour changer le paragraphe
const changeParagraphe = function (e) {
    e.preventDefault();
    const paragrapheElement = document.querySelector('p');
    paragrapheElement.innerText = 'Changement de texte 😂 🤣 😃 😄';
};

const lienElement = document.querySelector('a');
const titreElement = document.querySelector('h1');

titreElement.addEventListener('click', changeParagraphe)
}

// Créer du Json à partir d'un objet
const personne2 = {
    "nom": "Jean",
    "ville": "Nairobi"
}

const exempleJson= JSON.stringify(personne2);
console.log(exempleJson)