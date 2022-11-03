const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// let game;

let scoreDisplay = document.querySelector('#score');
let scoreValue = 0;

let winOrLoseElem = document.querySelector('#winOrLoseId');
let winOrLose = "";

class Player {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = 0

        const playerImg = new Image();
        // playerImg.addEventListener('load', () => {
            this.playerImg = playerImg;
        //     this.draw();
        // });
        playerImg.src = './media/bin.png'
        // this.draw()
    }
    moveLeft(){
        if (this.vx <= -4){
            this.vx = -4
        }
        if (this.vx > 0){
            this.vx = -2
        }
        this.vx -= 2;
        // if (this.x == 0){
        //     this.x = 100
        //     this.vx = 0;
        // }
    }
    moveRight(){
        if (this.vx >= 4) {
            this.vx = 4
        }
        if (this.vx < 0) {
            this.vx = 2
        }
        this.vx += 2;
        // if (this.x > canvas.width - binMaxWidth){
        //     this.vx = -(this.vx);
        // }
    }
    updatePosition(){
        if (this.x <= 0) {
            this.x = 5;
            this.vx = 0
        } 
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.width - 5
            this.vx = 0
        }
        else {   
            this.x += this.vx
        }
        // if (this.x = 0){
        //     this.x = 100
        //     this.vx = 0;
        // } 
    }
    draw(){
    ctx.drawImage(this.playerImg, this.x, this.y, this.width, this.height)
    }
}

let trashArr = [];

let banana = new Image();
banana.src = "./media/banana peel.png"
banana.arrId = "banana"
banana.recyclable = false;
banana.points = -2;
trashArr.push(banana);

let can = new Image();
can.src = "./media/can.png"
can.arrId = "can"
can.recyclable = true;
can.points = 1;
trashArr.push(can);

let cardboard = new Image();
cardboard.src = "./media/cardboard.png"
cardboard.arrId = "cardboard"
cardboard.recyclable = true;
cardboard.points = 1;
trashArr.push(cardboard);

let cerealBox = new Image();
cerealBox.src = "./media/cereal box.png"
cerealBox.arrId = "cerealBox"
cerealBox.recyclable = true;
cerealBox.points = 1;
trashArr.push(cerealBox);

let chineseTakeout = new Image();
chineseTakeout.src = "./media/chinese takeout.png"
chineseTakeout.arrId = "chineseTakeout"
chineseTakeout.recyclable = false;
chineseTakeout.points = -2;
trashArr.push(chineseTakeout);

let coffeeCup = new Image();
coffeeCup.src = "./media/coffee cup.png"
coffeeCup.arrId = "coffeeCup"
coffeeCup.recyclable = false;
coffeeCup.points = -2;
trashArr.push(coffeeCup);

let cupHolder = new Image();
cupHolder.src = "./media/cup holder.png"
cupHolder.arrId = "cupHolder"
cupHolder.recyclable = true;
cupHolder.points = 1;
trashArr.push(cupHolder);

let paperTowel = new Image();
paperTowel.src = "./media/paper towel roll.png"
paperTowel.arrId = "paperTowel"
paperTowel.recyclable = true;
paperTowel.points = 1;
trashArr.push(paperTowel);

let paper = new Image();
paper.src = "./media/paper.png"
paper.arrId = "paper"
paper.recyclable = true;
paper.points = 1;
trashArr.push(paper);

let pizzaBox = new Image();
pizzaBox.src = "./media/pizza box.png"
pizzaBox.arrId = "pizzaBox"
pizzaBox.recyclable = false;
pizzaBox.points = -2;
trashArr.push(pizzaBox);

let plasticBag = new Image();
plasticBag.src = "./media/plastic bag.png"
plasticBag.arrId = "plasticBag"
plasticBag.recyclable = false;
plasticBag.points = -2;
trashArr.push(plasticBag);

let plasticBottle = new Image();
plasticBottle.src = "./media/plastic bottle.png"
plasticBottle.arrId = "plasticBottle"
plasticBottle.recyclable = true;
plasticBottle.points = 1;
trashArr.push(plasticBottle);

let plasticTakeout = new Image();
plasticTakeout.src = "./media/plastic takeout.png"
plasticTakeout.arrId = "plasticTakeout"
plasticTakeout.recyclable = true;
plasticTakeout.points = 1;
trashArr.push(plasticTakeout);

let plasticUtensils = new Image();
plasticUtensils.src = "./media/plastic utensils.png"
plasticUtensils.arrId = "plasticUtensils"
plasticUtensils.recyclable = false;
plasticUtensils.points = -2;
trashArr.push(plasticUtensils);

let styrofoamTakeout = new Image();
styrofoamTakeout.src = "./media/styrofoam takeout.png"
styrofoamTakeout.arrId = "styrofoamTakeout"
styrofoamTakeout.recyclable = false;
styrofoamTakeout.points = -2;
trashArr.push(styrofoamTakeout);

let styrofoam = new Image();
styrofoam.src = "./media/styrofoam.png"
styrofoam.arrId = "styrofoam"
styrofoam.recyclable = false;
styrofoam.points = -2;
trashArr.push(styrofoam);

// console.log(trashArr, 'Trash Array')
// console.log(recyclableArr, 'Recyclable Array')

class FallingItems {
    constructor(recyclable, points){
        this.x = Math.random() * 1051;
        this.y = 0;
        this.velocity = Math.ceil(Math.random() * 3);
        this.width =100;
        this.height = 90;
        this.allItems = trashArr[Math.floor(Math.random() * trashArr.length)]
        this.recyclable = this.allItems.recyclable
        this.points = this.allItems.points
    }
    moveDown(){
        this.y += this.velocity;
        // if (this.y > binMaxHeight){
        //     ctx.clearRect(0, 0, canvas.width, canvas.height)
        // }
    }
    collisionCheck(obstacle) {
        if (
          this.x < obstacle.x + (obstacle.width - 50) &&
          this.x + this.width > (obstacle.x + 50) &&
          this.y < obstacle.y + obstacle.height &&
          this.height + this.y > obstacle.y
        ) {
          // Collision detected!
        //   console.log("detected!");
          return true;
        } else {
          // No collision
          return false;
        }
    }
    draw(){
        ctx.drawImage(this.allItems, this.x, this.y, this.width, this.height)
    }
}

let itemsArr = [];

let addItems = () => {
    // console.log("adding")
    itemsArr.push(new FallingItems())
    // console.log(itemsArr, "Items Array")
};

let binMaxWidth = 110;
let binMaxHeight = 110;

let bin = new Player(480, 380, binMaxWidth, binMaxHeight);

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", function(event){
    switch (event.code){
        case "ArrowLeft":
            bin.moveLeft();
            break;
        case "ArrowRight":
            bin.moveRight();
            break;
    }
});

let frameCount = 0;
let int;

let correctCollect = new Audio ('./media/sfx whoosh.mp3')
let splat = new Audio ('./media/sfx splat.mp3')
let winner = new Audio ('./media/sfx win.mp3')
let loser = new Audio ('./media/sfx lose.mp3')

const animationLoop = () => {
    // console.log("Animating")
    // game = window.requestAnimationFrame(animationLoop, canvas)
    frameCount++;
    
    clearCanvas();

    if (frameCount % 60 == 0){
        
        addItems();

    }
    for (let i = 0; i < itemsArr.length; i++){
       
        itemsArr[i].moveDown(); // drop trash from sky
        
        if(itemsArr[i].collisionCheck(bin)) { 
            
            // assigning point values
            if(itemsArr[i].recyclable){
                scoreValue += 1;
                scoreDisplay.innerHTML = scoreValue
                console.log('check')
                correctCollect.play();
                // correctCollect.playbackRate=1;
            }   else {
                scoreValue -= 2;
                scoreDisplay.innerHTML = scoreValue
                splat.play();
            }

            // remove item upon contact with bin
            itemsArr.splice(i, 1)
            i--

            // win or lose display
            if(scoreValue >= 5){
                winOrLose = 'You Win!'
                winOrLoseElem.innerHTML = winOrLose
                canvas.style.display = 'none'
                clearInterval(int)
                winner.play();
                instructionsButton();
                bin.x = 480
                bin.vx = 0
            } else if(scoreValue <= -10){
                winOrLose = 'Game Over'
                winOrLoseElem.innerHTML = winOrLose
                canvas.style.display = 'none'
                clearInterval(int)
                loser.play();
                instructionsButton();
                bin.x = 480
                bin.vx = 0

            }
        }
        itemsArr[i].draw();
    }
    bin.draw();
    bin.updatePosition()
}

// let int;

function instructionsButton(){
    clearInterval(int)
    bin.x = 480
    bin.vx = 0
    if(canvas.getContext){
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle = 'black';
        ctx.font = '20px Verdana';
        ctx.fillText('The goal of this game is to correctly sort through trash and recyclable items.', 150, 200)
    }
    if(canvas.getContext){
        ctx.fillText('Trash that cannot be recycled will grant you -2 points while trash that can be', 150, 230)
    }
    if(canvas.getContext){
        ctx.fillText('recycled will grant you +1 point. The game is won when you score 5 points.', 150, 260)
    }
    if(canvas.getContext){
        ctx.fillText('The game ends when you score -10 points. Good luck!', 150, 290)
    }
} 
instructionsButton(); 

/*
let instructBttn = document.querySelector('#instructions')
let instructText = document.querySelector('#instructionText')
instructBttn.addEventListener('click', () => {
    ctx.fillStyle = 'white',
    ctx.fillRect(0, 0, canvas.width, canvas.width)
    instructText.style.display = 'block';
});
*/

let soundtrack = new Audio ('./media/Game Soundtrack.mp3')

function startGame(){
    // canvas.style.display = 'block'
    winOrLoseElem.innerHTML = ''
    scoreDisplay.innerHTML = '0'
    scoreValue = 0
    // animationLoop()
    int = setInterval(animationLoop, 18);
    // int = setInterval(addItems, 1000)
    // console.log("Started")
    soundtrack.play();
    soundtrack.volume = 0.25;
    frameCount = 0;
    canvas.style.display = 'inline';
    bin.draw();
}

let openingImg = new Image()
openingImg.src = './media/landing bg.png'

window.onload = () => {
    document.querySelector('#instructions').addEventListener('click', instructionsButton);

    document.querySelector('#start').addEventListener('click', startGame);

    // document.querySelector('#resources').addEventListener('click', resourcesButton);

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(openingImg, 0, 0, canvas.width, canvas.height)
}