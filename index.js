var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){

    document.querySelector(".sidebar").classList.toggle("show_menu")
    document.querySelector(".hamburguer").classList.toggle("show_menu")
    document.querySelector("#line1").classList.toggle("show_menu")
    document.querySelector("#line2").classList.toggle("show_menu")
    document.querySelector("#line3").classList.toggle("show_menu")
    document.querySelector("#span").classList.toggle("show_menu")

});
