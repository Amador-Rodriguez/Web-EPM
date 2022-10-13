var check = document.querySelector(".language");

check.addEventListener('click', idioma);

function idioma(){
    let value = check.checked; 
    

    if(value == true){
        current = location.pathname.substring(1);
        location.href="/us/" + current;
    }else{
        current = location.pathname.substring(4);
        location.href="../"+ current;
    }
}