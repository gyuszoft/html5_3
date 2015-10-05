//Elemek kiválasztása
// @param selector:string  - Az elemet kiválasztó selector
function _q( selector ){
    // Elemek kiválasztása
    var elements = document.querySelectorAll( selector );
    
    return elements;
}

// Profile beviteli mező megjelenítése
function showProfile(){
    var div=_q( ".profile-div" )[0];
    //console.log(div);
    if (div.classList.contains("show")){
        div.classList.remove("show");
    }else{
        div.classList.add("show");
    }
}