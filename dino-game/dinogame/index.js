var char = document.getElementById("char");
var block = document.getElementById("block");
var play = document.getElementById("play");
var score = document.querySelector(".score");
var scrcount, speed1, speed2;
function start(){
    play.style.display = "none";
    setTimeout(function(){
        block.classList.add("speed0");
        document.querySelector(".cloud").style.display = "flex";
        document.querySelector(".cloud").style.animation = "cloud 30s infinite";
    }, 500)
    speed1 = setTimeout(function(){
        block.style.animation = 'block 1.2s infinite'
    }, 11000)
    speed2 = setTimeout(function(){
        block.style.animation = 'block 1s infinite'
    }, 20500)
    var scr = 0;
    scrcount = setInterval(()=>{
        scr = scr + 1;
        score.innerHTML = `${scr}`;
    },300);

}

function jump(){
    if(char.classList != "anim"){
        char.classList.add("anim");
    }
    setTimeout(function(){
        char.classList.remove("anim");
    }, 500)
}

var dead = setInterval(() => {
    var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 80 && blockLeft >50 && charTop>=110){
        block.style.animation = "none";
        block.style.left = "80px";
        play.innerHTML = "Replay";
        play.style.display = "block";
        clearInterval(scrcount);
        clearInterval(speed1);
        clearInterval(speed2);
        play.addEventListener('click', ()=>{
            location.reload()
        })
    }
}, 10);


