// Al hacer scroll se ejecuta esta funcion(para poner obscura la navbar)

window.addEventListener("scroll", function(){

    var nav = document.querySelector("nav");
    nav.classList.toggle("obscuro",window.scrollY>0);
    
    })

