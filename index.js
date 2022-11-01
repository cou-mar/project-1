const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        const playerImg = new Image();
        playerImg.addEventListener('load', () => {
            this.playerImg = playerImg;
            this.draw();
        });
        playerImg.src = './media/bin.png'
    }

    moveLeft(){
        this.x -= 10;
        if (this.x < 0){
            this.x = 0;
        }
    }
    moveRight(){
        this.x += 10;
        if (this.x > canvas.width - binMaxWidth){
            this.x = canvas.width - binMaxWidth;
        }
    }

    draw(){
    ctx.drawImage(this.playerImg, this.x, this.y, this.width, this.height)
    }
}

let trashArr = [];

let banana = new Image();
banana.src = "./media/banana peel.png"
banana.arrId = "banana"
trashArr.push(banana);

let can = new Image();
can.src = "./media/can.png"
can.arrId = "can"
trashArr.push(can);

let cardboard = new Image();
cardboard.src = "./media/cardboard.png"
cardboard.arrId = "cardboard"
trashArr.push(cardboard);

let cerealBox = new Image();
cerealBox.src = "./media/cereal box.png"
cerealBox.arrId = "cerealBox"
trashArr.push(cerealBox);

let chineseTakeout = new Image();
chineseTakeout.src = "./media/chinese takeout.png"
chineseTakeout.arrId = "chineseTakeout"
trashArr.push(chineseTakeout);

let coffeeCup = new Image();
coffeeCup.src = "./media/coffee cup.png"
coffeeCup.arrId = "coffeeCup"
trashArr.push(coffeeCup);

let cupHolder = new Image();
cupHolder.src = "./media/cup holder.png"
cupHolder.arrId = "cupHolder"
trashArr.push(cupHolder);

let paperTowel = new Image();
paperTowel.src = "./media/paper towel roll.png"
paperTowel.arrId = "paperTowel"
trashArr.push(paperTowel);

let paper = new Image();
paper.src = "./media/paper.png"
paper.arrId = "paper"
trashArr.push(paper);

let pizzaBox = new Image();
pizzaBox.src = "./media/pizza box.png"
pizzaBox.arrId = "pizzaBox"
trashArr.push(pizzaBox);

let plasticBag = new Image();
plasticBag.src = "./media/plastic bag.png"
plasticBag.arrId = "plasticBag"
trashArr.push(plasticBag);

let plasticBottle = new Image();
plasticBottle.src = "./media/plastic bottle.png"
plasticBottle.arrId = "plasticBottle"
trashArr.push(plasticBottle);

let plasticTakeout = new Image();
plasticTakeout.src = "./media/plastic takeout.png"
plasticTakeout.arrId = "plasticTakeout"
trashArr.push(plasticTakeout);

let plasticUtensils = new Image();
plasticUtensils.src = "./media/plastic utensils.png"
plasticUtensils.arrId = "plasticUtensils"
trashArr.push(plasticUtensils);

let styrofoamTakeout = new Image();
styrofoamTakeout.src = "./media/styrofoam takeout.png"
styrofoamTakeout.arrId = "styrofoamTakeout"
trashArr.push(styrofoamTakeout);

let styrofoam = new Image();
styrofoam.src = "./media/styrofoam.png"
styrofoam.arrId = "styrofoam"
trashArr.push(styrofoam);

console.log(trashArr, "Trash Array")

class FallingItems {
    constructor(){
        this.x = Math.random() * 1051;
        this.y = 0;
        // this.velocity = Math.ceiling(Math.random() * 10);
        this.width = 40;
        this.height = 40;
        this.trash = trashArr[Math.floor(Math.random() * trashArr.length)]
    }
};

let itemsArray = [];

let addItems = () => {
    console.log("adding")
    itemsArray.push(new FallingItems())
    console.log(itemsArray, "Items Array")
};

let binMaxWidth = 110;
let binMaxHeight = 110;

let bin = new Player(480, 380, binMaxWidth, binMaxHeight);

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bin.draw();
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
    clearCanvas()
});

let frameCount = 0;
let fallingArr = [];

const animationLoop = () => {
    
    frameCount++;

    // if (frameCount % 120 == 0){
    //     let item1 = new FallingItems(0, canvas.height, 40, 40);
    //     let = item2 = new FallingItems(0, canvas.height, 40, 40);

    //     fallingArr.push(item1);
    //     fallingArr.push(item2);
    // }

    // ctx.clearRect(0, 0, canvas.width, canvas.height);    

    // item1.drawImage();
    // item2.drawImage();
}

/*  set interval on addItems
    on click start.. begin calling images+falling
    request animation frame

*/

let int;

window.onload = () => {
    document.querySelector("#start").addEventListener('click', startGame)

    function startGame(){
        setInterval(animationLoop, 16);
        int = setInterval(addItems, 1000)
        console.log("Started")
    }
}
