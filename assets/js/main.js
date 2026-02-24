
document.addEventListener("DOMContentLoaded", function () {

    const btnArriba = document.getElementById("btnArriba");

    // Evento click
    btnArriba.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
