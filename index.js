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