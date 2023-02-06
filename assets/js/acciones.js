// Al hacer scroll se ejecuta esta funcion(para poner translucida la navbar)

window.addEventListener("scroll", function(){

    var nav = document.querySelector("nav");
    nav.classList.toggle("translucido",window.scrollY>0);
    
    })

