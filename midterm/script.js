function component(name, x, y) {
    this.width;
    this.height;
    this.name = name;
    this.x = x;
    this.y = y;
    this.speed_y = 30;
    this.color = "#" + randomLetter(colorlist);
    this.rotate_flag = 0;
    this.old_flag = 0;

    //small adjustment to align shape to grid
    this.adjust = function(){
        if ((this.name == "o"||this.name == "l") && (this.y < 0) && (this.x == 135)){
            // console.log(this.y);
            this.x += 15;
            return;
        }
        
        //ignore the following code section for these 3 shapes 
        if (this.name == "E" || this.name == "S" || this.name =="o"){
            return;
        }

        if (this.old_flag != this.rotate_flag ){
            this.old_flag = this.rotate_flag;
            if (this.rotate_flag == 1|| this.rotate_flag == 0){
                this.x += 15;
                this.y += 15;
            }
            else if (this.rotate_flag == 2 || this.rotate_flag == 3){
                this.x -= 15;
                this.y -= 15;
            }
            return;
        }
    }

    this.selected = function(){
        ctx = myGameArea.context;
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.strokeRect(this.x - (0.5*this.width), this.y - (0.5*this.height), this.width, this.height);

    }

    this.update = function(){
        ctx = myGameArea.context
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotate_flag * Math.PI / 2);
        this.adjust();

        switch (name){
            case "C":
                this.width = 90;
                this.height = 120;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 120;
                    this.height = 90;
                }

                ctx.beginPath();
                ctx.moveTo(45, -60);
                ctx.lineTo(45, -60);
                ctx.lineTo(45, -30);
                ctx.lineTo(-15, -30);
                ctx.lineTo(-15, 30);
                ctx.lineTo(45, 30);
                ctx.lineTo(45, 60);
                ctx.lineTo(-45, 60);
                ctx.lineTo(-45, -60);
                ctx.closePath();
                break;
                
            case "S":
                this.width = 90;
                this.height = 150;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 150;
                    this.height = 90;
                }
                ctx.beginPath();
                ctx.moveTo(-45, -75);
                ctx.lineTo(45, -75);
                ctx.lineTo(45, -45);
                ctx.lineTo(-15, -45);
                ctx.lineTo(-15, -15);
                ctx.lineTo(45, -15);
                ctx.lineTo(45, 75);
                ctx.lineTo(-45, 75);
                ctx.lineTo(-45, 45);
                ctx.lineTo(15, 45);
                ctx.lineTo(15, 15);
                ctx.lineTo(-45, 15);
                ctx.lineTo(-45, -75);
                ctx.closePath();
                
                break;

            case "I":
                this.width = 30;
                this.height = 120;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 120;
                    this.height = 30;
                }
                ctx.beginPath();
                ctx.moveTo(-15, -60);
                ctx.lineTo(15, -60);
                ctx.lineTo(15, 60);
                ctx.lineTo(-15, 60);
                ctx.lineTo(-15, -60);
                ctx.closePath();
                break;

            case "E":
                this.width = 90;
                this.height = 150;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 150;
                    this.height = 90;
                }
                
                ctx.beginPath();
                ctx.moveTo(-45, -75);
                ctx.lineTo(45, -75);
                ctx.lineTo(45, -45);
                ctx.lineTo(-15, -45);
                ctx.lineTo(-15, -15);
                ctx.lineTo(15, -15);
                ctx.lineTo(15, 15);
                ctx.lineTo(-15, 15);
                ctx.lineTo(-15, 45);
                ctx.lineTo(45, 45);
                ctx.lineTo(45, 75);
                ctx.lineTo(-45, 75);
                ctx.lineTo(-45, -75);
                ctx.closePath();
                break;
                
            case "o":
                ctx.beginPath();
                ctx.moveTo(-30, -30);
                ctx.lineTo(30, -30);
                ctx.lineTo(30, 30);
                ctx.lineTo(-30, 30);
                ctx.lineTo(-30, -30);
                ctx.closePath();
                // ctx.fillRect(-30, -30, 60, 60);
                
                // ctx.strokeRect(-30, -30, 60, 60);
                this.width = 60;
                this.height = 60;
                break;

            case "t":
                this.width = 90;
                this.height = 60;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 60;
                    this.height = 90;
                }
                ctx.beginPath();
                ctx.moveTo(-15, 0);
                ctx.lineTo(-15, -30);
                ctx.lineTo(15, -30);
                ctx.lineTo(15, 0);
                ctx.lineTo(45, 0);
                ctx.lineTo(45, 30);
                ctx.lineTo(-45, 30);
                ctx.lineTo(-45, 0);
                ctx.lineTo(-15, 0);
                ctx.closePath();
                break;
            
            case "z":
                this.width = 90;
                this.height = 60;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 60;
                    this.height = 90;
                }
                ctx.beginPath();
                ctx.moveTo(-45, -30);
                ctx.lineTo(15, -30);
                ctx.lineTo(15, 0);
                ctx.lineTo(45, 0);
                ctx.lineTo(45, 30);
                ctx.lineTo(-15, 30);
                ctx.lineTo(-15, 0);
                ctx.lineTo(-45, 0);
                ctx.lineTo(-45, -30);
                ctx.closePath();
                break;
            
            case "l":
                // ctx.translate(15, 0);
                this.width = 60;
                this.height = 90;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 90;
                    this.height = 60;
                }
                ctx.beginPath();
                ctx.moveTo(-30, -45);
                ctx.lineTo(30, -45);
                ctx.lineTo(30, -15);
                ctx.lineTo(0 , -15);
                ctx.lineTo(0, 45);
                ctx.lineTo(-30, 45);
                ctx.lineTo(-30, -45);
                ctx.closePath();
                break;
        }
        ctx.restore();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.fillStyle = null;
        // ctx.lineWidth = 1.2;
        // ctx.strokeStyle = 'black';
        // ctx.stroke();
    }
        
    this.newPos = function() {
        this.y += this.speed_y;
        // if (this.speed_y == 0);
        // this.speed_y = 30;
    }

    this.clicked = function() {
        var myleft = this.x - (0.5 * this.width);
        var myright = this.x + (0.5 * this.width);
        var mytop = this.y - (0.5 * this.height);;
        var mybottom = this.y + (0.5 * this.height);
        var clicked = true;

        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            clicked = false;
        }
        return clicked;
    }
}

//colors from https://mui.com/material-ui/customization/color/
const colorlist = ["aa2e25", "a31545", "6d1b7b", "482880", "2c387e", "1769aa", "0276aa", "008394", "00695f", "357a38", 
"618833", "8f9a27", "b2a429", "b28704", "b26a00", "b23c17"];

//copied from somewhere
function randomLetter(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

//ensure the tetris block bottom is placed on the top border of canvas 
function adjHeight(name){
    switch (name){
        case "C":
            return -60;
            
        case "S":
            return -75;

        case "I":
            return -60;

        case "E":
            return -75;
            
        case "o":
            return -30;

        case "t":
            return -30;
        
        case "z":
            return -30;
        
        case "l":
            return -45;
    }
}
