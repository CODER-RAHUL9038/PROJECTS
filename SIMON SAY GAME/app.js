let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let btns = ["yellow","green","red","purple"]

// FOR PRESS ANY KEY LOGIC
document.addEventListener('keypress', startGame)
document.addEventListener('touchstart', function(e){
    if(started == false && !e.target.classList.contains('btn')){
        e.preventDefault()
        startGame()
    }
},{passive:false})

function startGame (){
    if (started == false){
    console.log(" Game Started");
    started = true;
    levelUp() // calling levelp function
    }
    
}

// REUSABLE LEVELUP FUNCION
function levelUp(){
    userSeq = [];
    level++
    h2.innerText = (`Level ${level}`);
    // RANDOM BUTTON FLASH
    let randIdx = Math.floor(Math.random()*4);
    let randColor =  btns[randIdx] // calling button flash function
    gameSeq.push(randColor)
    console.log(gameSeq)
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    

//     console.log(randIdx); // CHECKING PURPOSE ONLY
//     console.log(randColor); // CHECKING PURPOSE ONLY
//     console.log(randBtn); // CHECKING PURPOSE ONLY
}

// REUSABLE  GAME FLASH FUNCION
function gameFlash(btn){
    setTimeout(() => {
         btn.classList.add('flash')  
    }, 500); // adding white background for few second

    setTimeout(() => {
         btn.classList.remove('flash')  // removing white background after  1 second  for giving flash effect
    }, 1000);
    setTimeout(gameBtnFlash,500) 
}



// REUSABLE USER FLASH FUNCION
function userFlash(btn){
    btn.classList.add('userFlash') // adding white background for 1 second 
    setTimeout(() => {
         btn.classList.remove('userFlash')  // removing white background after  1 second  for giving flash effect
    }, 100);
}


//  USER BUTTON PRESS FUNCTION

function checkAns(idx){

    // console.log("Current Level: ",level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            flashCorrectEffect()
            setTimeout(success,500)
            setTimeout(levelUp,2000)
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score is <b> ${level}</b> <br> Press any key to start again`
        flashWrongEffect()
        setTimeout(reset,200)
        maxScore()
        setTimeout( wrongSound, 200)
    }
}
function flashWrongEffect(){
    let body = document.querySelector('body');
    setTimeout(() => {
    body.classList.add('wrong');
    }, 100)
    setTimeout(() => {
    body.classList.remove('wrong');
    }, 1500)
}
function flashCorrectEffect() {
    let gif = document.getElementById('celebration-gif');
    setTimeout(() => {
        gif.style.display = 'block';
    }, 400);

    setTimeout(() => {
        gif.style.display = 'none';
    }, 2000);
}




function btnPress() {
    if(!started)return
    let btn = this;
    userFlash(btn) // CALLING USER FLASH FUNCTION
    btnClick()
    let userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}



let allBtns = document.querySelectorAll('.btn');
for( btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function maxScore(){
    h3.innerText = `Top Score : ${level}`
}
    
function reset(){
    started = false;
    gameSeq = [];
    userSeq= [];
    level = 0;
    
}

function btnClick(){
    let audio = new Audio('sound/button.mp3')
    audio.play()
}
function success(){
    let audio = new Audio('sound/psy.mp3')
    audio.play()
}
function wrongSound(){
    let audio = new Audio('sound/wrong.mp3')
    audio.play()
}
function gameBtnFlash(){
    let audio = new Audio('sound/game.mp3')
    audio.play()
}