function Exo1()
{
        console.log('carré cliqué')
        $('.vert-center').hide()
        let offsetTop = Math.floor(Math.random() * 300);
        let offsetLeft = Math.floor(Math.random() * 300);
        console.log(offsetTop,$('.vert-center').offset().top);
        console.log(offsetLeft,$('.vert-center').offset().top);
        $('.vert-center').offset({top: offsetTop, left: offsetLeft})
        $('.vert-center').show()
        // récupérer les largeurs et la hauteur de l'écran
        var screenWidth = screen.width;
        var screenHeight = screen.height;
        var x = document.getElementById("screen");
        x.innerHTML = "Device Screen: width: " + screenWidth + ", height: " + screenHeight + ".";
}
