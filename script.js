// Hav JS display the world // DONE!!!
// have pacman moves ups and down
// when pac man eats coin, have coin disapear


let pacworld = [

    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,3,1,1,1,3,1,1,1,2,2,2,1,3,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,1,3,1,1,1,1,2,2,2,1,1,3,1,1,1,2,1,2],
    [2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2],
    [2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2],
    [2,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,3,2],
    [2,1,2,2,2,1,2,2,1,2,1,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,2,1,2,2,3,2,1,2,1,1,1,2,2,2,1,2],
    [2,1,2,1,2,1,2,2,1,2,1,2,2,2,1,2,2,2,1,2],
    [2,1,2,1,2,1,2,2,1,2,1,1,1,1,1,2,2,2,1,2],
    [2,1,2,1,2,1,2,2,1,2,2,2,2,2,1,2,2,2,1,2],
    [2,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

];

let worldDiv = document.querySelector("#world");
let pacman = document.querySelector("#pacman");


let pacAxis = {

    x: 1,
    y: 1
};

function drawPacWorld(){
    var draw = "";

    for(let i = 0; i < pacworld.length; i++){
        draw += "<div class='row'>";
        for(let j = 0; j < pacworld[i].length; j++){
            if(pacworld[i][j] == 2)
                draw += "<div class='wall'></div>";
            
            if(pacworld[i][j] == 1)
                draw += "<div class='coin'></div>";

            if(pacworld[i][j] == 3)
                draw += "<div class='cherry'></div>";
            
            if(pacworld[i][j] == 0)
                draw += "<div class='empty'></div>";
            }
            draw += "</div>"
        }
        console.log(draw);  
        worldDiv.innerHTML = draw;
    }
function displayPacman(){

    pacman.style.top = pacAxis.y * 20 + "px";
    pacman.style.left = pacAxis.x * 20 + "px";
}
drawPacWorld();
displayPacman();

let score = 0;
let cherrypoints = 50;
let scorelabel = document.querySelector("#score");
let startgame = document.querySelector("#start-game");
let creditsound = document.querySelector("#credit-sound");
let fruitsound = document.querySelector("#fruit-sound");
let winsong = document.querySelector("#win-song");
let yaysound = document.querySelector("#yay");


function displayScore (){

    scorelabel.innerText = "Your Score:" + score;
}

document.onkeydown = function (e) {

    console.log(e.keyCode);

    if(e.keyCode == 38){ // UP
        pacAxis.y --;
        creditsound.play();
        creditsound.volume = 0.1;
        pacman.classList.add("up-face");
        pacman.classList.remove("down-face");
        pacman.classList.remove("right-face");
        pacman.classList.remove("left-face");
        
    
    }
    else if(e.keyCode == 40){ // DOWN
        pacAxis.y ++; 
        creditsound.play();
        creditsound.volume = 0.1;
        pacman.classList.add("down-face");
        pacman.classList.remove("up-face");
        pacman.classList.remove("right-face");
        pacman.classList.remove("left-face");
    }
    else if(e.keyCode == 37){ // LEFT
        pacAxis.x --; 
        creditsound.play();
        creditsound.volume = 0.1;
        pacman.classList.add("left-face");
        pacman.classList.remove("right-face");
        pacman.classList.remove("down-face");
        pacman.classList.remove("up-face");
    }
    else if(e.keyCode == 39){ // RIGHT
        pacAxis.x ++; 
        creditsound.play();
        creditsound.volume = 0.1;
        pacman.classList.add("right-face");
        pacman.classList.remove("left-face");
        pacman.classList.remove("down-face");
        pacman.classList.remove("up-face");
    }
    if(pacworld[pacAxis.y][pacAxis.x] == 1){
        pacworld[pacAxis.y][pacAxis.x] = 0;
        score++;
        document.querySelector("#start-game").innerText = "Your Score:"+' '+ score;
        drawPacWorld();
        displayScore();
        displayPacman();
    }
    if(pacworld[pacAxis.y][pacAxis.x] == 3){
        pacworld[pacAxis.y][pacAxis.x] = 0;
        score += cherrypoints;
        fruitsound.play();
        fruitsound.volume = 0.1;
        document.querySelector("#start-game").innerText = "Your Score:"+' '+ score;
        drawPacWorld();
        displayScore();
        displayPacman();
    }
    if(pacworld[pacAxis.y][pacAxis.x] == 0){
        pacworld[pacAxis.y][pacAxis.x] = 0;
        document.querySelector("#start-game").innerText = "Your Score:"+' '+ score;
        drawPacWorld();
        displayScore();
        displayPacman();
    }
    if(pacworld[pacAxis.y][pacAxis.x] == 0){
        pacworld[pacAxis.y][pacAxis.x] = 0;
        document.querySelector("#start-game").innerText = "Your Score:"+' '+ score;
        drawPacWorld();
        displayScore();
        displayPacman();
    }
    if(score === 653){
        document.querySelector("#start-game").innerText = "YOU WIN!";
        pacmansong.pause();
        winsong.play();
        winsong.volume = 0.5;
        yaysound.play();
        yaysoung.volume = 0.1;
        
    }
}

let pacmansong = document.querySelector("#pacman-theme");
function startMusic(){

    pacmansong.play();
    pacmansong.volume = 0.5;
}
startMusic();









