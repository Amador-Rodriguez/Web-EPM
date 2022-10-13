var arrow = document.querySelector("#arrow");
var section = document.querySelector("#section");
var height = 0;
var oculto = true;

$(document).ready(function () {
    if (screen.width <= 600) {
        $(".processCard").attr("style", "display:block");
        //$("#arrow").attr("display", "none");
        

    }

})

addEventListener('resize', (e) => {
    if (screen.width <= 600) {
        $(".processCard").attr("style", "display:block");
        //alert("Please wait...");
    } else {
        $(".processCard").removeAttr("style", "display:block");
    }
});


document.addEventListener('scroll', (e) => {
    var sectionHeight = $("#section").height();

    
    if (window.scrollY <= sectionHeight) {
        height = (window.scrollY);
        
        animToggle($("#line"));
        animToggle($("#line2"));
        animToggle($("#line3"));
        animToggle($("#line4"));
        animToggle($("#line5"));
        animToggle($("#line6"));
        console.log(window.scrollY+ $("#arrow").offset().top);
    }
    else{
        
    }
    $("#arrow").height(height);
    //console.log(sectionHeight);
});

function animToggle(line){
    if(((window.scrollY + $("#arrow").offset().top) > (line.offset().top)) &&  (line.width()) == 0 ){
        line.animate({width: "100%"});
        console.log("Aparece");
    }
    if((window.scrollY + $("#arrow").offset().top) < (line.offset().top) && parseInt(line.width()/ line.parent().width() * 100) == 100){
        line.animate({width: "0%"});
        console.log("Desaparece");
    }
}