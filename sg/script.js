var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("gam");
var audio = new Audio('../res/audio/Top 10 Songs of The Decade [2010 - 2020] (MUST SEE(MP3_160K).mp3')
var counter=0;
function start(){
    document.getElementById("start_btn").style.visibility  = "hidden";
    setInterval(function(){
        
        var character_style = getComputedStyle(character);
        var block_style = getComputedStyle(block);
        var cWidth = parseInt(character_style.width) ;
        var cHeight = character_style.height;
        var cx = parseInt(character_style.top  + cHeight) ;
        var cy = character_style.left + cWidth;
        var bx = parseInt(block_style.top) ;
        var by = parseInt(block_style.left) ;
        block_c(parseInt(counter/150));
        if(by<cWidth && by>-cWidth && cx >bx){
            audio.pause();
            alert("play");
            audio.play();
        }
        else {
            counter ++;
        }
    },10);
}



function jump(){
    console.log(character);
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(function(){
        block_y();
        character.classList.remove("animate");
    },500);
}

// function collison(){
//     var character_style = getComputedStyle(character);
//     var block_style = getComputedStyle(block);
//     var cx = parent(character_style.bottom) ;
//     var cy = character_style.right;
//     var bx = block_style.top;
//     var by = block_style.left;
//     if(by <= cy && cx<=bx ){
//         alert("you lost ");
//     }
// }



function block_y(){
    block.classList.add("animate1");
    
}
function block_c(c){
    if(c==1){
        
        block.innerHTML = "2010";
        y2010();
        document.getElementById("my_notes").innerHTML="2010 rolling in the deep - adle";
        console.log("2010");
    }
    else if(c==22){
        block.innerHTML = "2011";
        console.log("2011");
        y2011();
        document.getElementById("my_notes").innerHTML="2011 Somebody That I Used to Know - Gotye";
    }
    else if(c==44){
        block.innerHTML = "2012";
        y2012();
        document.getElementById("my_notes").innerHTML="2012 Gangnam Style - Psy";
        console.log("2012");

    }
    else if(c==68){
        block.innerHTML = "2013";
        y2013();
        document.getElementById("my_notes").innerHTML="2013 Get Lucky - Daft Punk (featuring Pharrell and Nile Rodgers)";
        console.log("2012");
    }
    else if(c==89){
        block.innerHTML = "2014";
        y2014();
        document.getElementById("my_notes").innerHTML="2014 Uptown Funk - Mark Ronson (featuring Bruno Mars)";
        console.log("2012");
    }
    else if(c==112){
        block.innerHTML = "2015";
        y2015();
        document.getElementById("my_notes").innerHTML="2015 Can't Feel My Face - The Weeknd";
        console.log("2012");
    }
    else if(c==134){
        block.innerHTML = "2016";
        y2016();
        document.getElementById("my_notes").innerHTML="2016  Starboy - The Weeknd (feat. Daft Punk)";
        console.log("2012");
    }
    else if(c==157){
        block.innerHTML = "2017";
        y2017();
        document.getElementById("my_notes").innerHTML="2017 Despacito - Luis Fonsi (with Daddy Yankee)";
        console.log("2012");
    }
    else if(c==180){
        block.innerHTML = "2018";
        y2018();
        document.getElementById("my_notes").innerHTML="2018 Shallow - Lady Gaga and Bradley Cooper";
        console.log("2012");
    }
    else if(c==205){
        block.innerHTML = "2019";
        y2019();
        document.getElementById("my_notes").innerHTML="2019 Señorita - Shawn Mendes";
        console.log("2012");
    }
    
}
function y2010(){
    audio.play();
    gam.classList.add("y2010");
}
function y2011(){
    gam.classList.remove("y2010");
    gam.classList.add("y2011");
}
function y2012(){
    gam.classList.remove("y2011");
    gam.classList.add("y2012");
}
function y2013(){
    gam.classList.remove("y2012");
    gam.classList.add("y2013");
}
function y2014(){
    gam.classList.remove("y2013");
    gam.classList.add("y2014");
}
function y2015(){
    gam.classList.remove("y2014");
    gam.classList.add("y2015");
}
function y2016(){
    gam.classList.remove("y2015");
    gam.classList.add("y2016");
}
function y2017(){
    gam.classList.remove("y2016");
    gam.classList.add("y2017");
}
function y2018(){
    gam.classList.remove("y2017");
    gam.classList.add("y2018");
}
function y2019(){
    gam.classList.remove("y2018");
    gam.classList.add("y2019");
}
function y2020(){
    gam.classList.remove("y2019");
    gam.classList.add("y2020");
}
