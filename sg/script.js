var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

function collison(){
    var character_style = getComputedStyle(character);
    var block_style = getComputedStyle(block);
    var cx = parent(character_style.bottom) ;
    var cy = character_style.right;
    var bx = block_style.top;
    var by = block_style.left;
    if(by <= cy && cx<=bx ){
        alert("you lost ");
    }
}

setInterval(function(){
    var character_style = getComputedStyle(character);
    var block_style = getComputedStyle(block);
    var cWidth = parseInt(character_style.width) ;
    var cHeight = character_style.height;
    var cx = parseInt(character_style.top  + cHeight) ;
    var cy = character_style.left + cWidth;
    var bx = parseInt(block_style.top) ;
    var by = parseInt(block_style.left) ;
    console.log(cx + " " + bx + " " + cy  + by);
    if(by<cWidth && by>-cWidth && cx >bx){
        alert("you lost");
    }
},1);
