let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["yellow","green","red","purple"]

// FOR PRESS ANY KEY LOGIC
document.addEventListener('keypress', startGame)
document.addEventListener('click', function(e){
    if(started == false && !e.target.classList.contains('btn')){
        startGame()
    }
})

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

// REUSABLE FLASH FUNCION
function gameFlash(btn){
    btn.classList.add('flash') // adding white background for 1 second 
    setTimeout(() => {
         btn.classList.remove('flash')  // removing white background after  1 second  for giving flash effect
    }, 200);
}

// REUSABLE USER FLASH FUNCION
function userFlash(btn){
    btn.classList.add('userFlash') // adding white background for 1 second 
    setTimeout(() => {
         btn.classList.remove('userFlash')  // removing white background after  1 second  for giving flash effect
    }, 200);
}


//  USER BUTTON PRESS FUNCTION

function checkAns(idx){

    // console.log("Current Level: ",level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500)
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score is <b> ${level}</b> <br> Press any key to start again`
        let body = document.querySelector('body');
        body.classList.add('wrong');
        setTimeout(() => {
        body.classList.remove('wrong');
        }, 200)
        reset()
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn) // CALLING USER FLASH FUNCTION
    let userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}



let allBtns = document.querySelectorAll('.btn');
    for( btn of allBtns){
        btn.addEventListener('click',btnPress);
    }


function reset(){
    started = false;
    gameSeq = [];
    userSeq= [];
    level = 0;
}