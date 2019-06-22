$(document).mousemove(function (e) {
    $('.logo').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});

document.querySelector("#result").addEventListener("click", function (event) {
    event.preventDefault();
});


function somme() {
    let nbr = document.querySelector("#calc1").value;
    let nbr2 = document.querySelector("#calc2").value;
    let total = parseInt(nbr) + parseInt(nbr2);
    document.querySelector('#result').innerHTML= total;
}

