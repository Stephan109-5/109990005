function component(name, x, y, ctx) {
    this.width;
    this.height;
    this.name = name;
    this.x = x;
    this.y = y;
    this.speed_y = 30;
    this.color = "#" + randomLetter(colorlist);
    this.ctx = ctx;
    this.rotate_flag = 0;   //0: 0 deg, 1: 90 deg, 2: 180 deg, 3: 270 deg
    this.old_flag = 0;

    //small adjustment to align shape to grid
    this.adjust = function(){
        if ((this.name == "o"||this.name == "l") && (this.y < 0) && (this.x == 135)){
            this.x += 15;
            return;
        }
        
        //ignore the following code section for these 3 shapes 
        if (this.name == "E" || this.name == "S" || this.name =="o"){
            return;
        }

        //small adjustment after rotation
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

    //draw a red box around the shape if selected
    this.selected = function(){
        var n_ctx = myGameArea.context;
        n_ctx.lineWidth = 1;
        n_ctx.strokeStyle = 'red';
        n_ctx.strokeRect(this.x - (0.5*this.width), this.y - (0.5*this.height), this.width, this.height);
    }

    this.update = function(){
        this.ctx.save();
        this.ctx.translate(this.x, this.y);                 //move canvas coordinates to center of the would-be drawn shape
        this.ctx.rotate(this.rotate_flag * Math.PI / 2); 
        this.adjust();

        switch (name){
            case "C":
                this.width = 90;
                this.height = 120;

                //flip the dimensions when rotated
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 120;
                    this.height = 90;
                }

                this.ctx.beginPath();
                this.ctx.moveTo(45, -60);
                this.ctx.lineTo(45, -60);
                this.ctx.lineTo(45, -30);
                this.ctx.lineTo(-15, -30);
                this.ctx.lineTo(-15, 30);
                this.ctx.lineTo(45, 30);
                this.ctx.lineTo(45, 60);
                this.ctx.lineTo(-45, 60);
                this.ctx.lineTo(-45, -60);
                this.ctx.closePath();
                break;
                
            case "S":
                this.width = 90;
                this.height = 150;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 150;
                    this.height = 90;
                }
                this.ctx.beginPath();
                this.ctx.moveTo(-45, -75);
                this.ctx.lineTo(45, -75);
                this.ctx.lineTo(45, -45);
                this.ctx.lineTo(-15, -45);
                this.ctx.lineTo(-15, -15);
                this.ctx.lineTo(45, -15);
                this.ctx.lineTo(45, 75);
                this.ctx.lineTo(-45, 75);
                this.ctx.lineTo(-45, 45);
                this.ctx.lineTo(15, 45);
                this.ctx.lineTo(15, 15);
                this.ctx.lineTo(-45, 15);
                this.ctx.lineTo(-45, -75);
                this.ctx.closePath();
                
                break;

            case "I":
                this.width = 30;
                this.height = 120;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 120;
                    this.height = 30;
                }
                this.ctx.beginPath();
                this.ctx.moveTo(-15, -60);
                this.ctx.lineTo(15, -60);
                this.ctx.lineTo(15, 60);
                this.ctx.lineTo(-15, 60);
                this.ctx.lineTo(-15, -60);
                this.ctx.closePath();
                break;

            case "E":
                this.width = 90;
                this.height = 150;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 150;
                    this.height = 90;
                }
                
                this.ctx.beginPath();
                this.ctx.moveTo(-45, -75);
                this.ctx.lineTo(45, -75);
                this.ctx.lineTo(45, -45);
                this.ctx.lineTo(-15, -45);
                this.ctx.lineTo(-15, -15);
                this.ctx.lineTo(15, -15);
                this.ctx.lineTo(15, 15);
                this.ctx.lineTo(-15, 15);
                this.ctx.lineTo(-15, 45);
                this.ctx.lineTo(45, 45);
                this.ctx.lineTo(45, 75);
                this.ctx.lineTo(-45, 75);
                this.ctx.lineTo(-45, -75);
                this.ctx.closePath();
                break;
                
            case "o":
                this.width = 60;
                this.height = 60;
                this.ctx.beginPath();
                this.ctx.moveTo(-30, -30);
                this.ctx.lineTo(30, -30);
                this.ctx.lineTo(30, 30);
                this.ctx.lineTo(-30, 30);
                this.ctx.lineTo(-30, -30);
                this.ctx.closePath();
                break;

            case "t":
                this.width = 90;
                this.height = 60;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 60;
                    this.height = 90;
                }
                this.ctx.beginPath();
                this.ctx.moveTo(-15, 0);
                this.ctx.lineTo(-15, -30);
                this.ctx.lineTo(15, -30);
                this.ctx.lineTo(15, 0);
                this.ctx.lineTo(45, 0);
                this.ctx.lineTo(45, 30);
                this.ctx.lineTo(-45, 30);
                this.ctx.lineTo(-45, 0);
                this.ctx.lineTo(-15, 0);
                this.ctx.closePath();
                break;
            
            case "z":
                this.width = 90;
                this.height = 60;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 60;
                    this.height = 90;
                }
                this.ctx.beginPath();
                this.ctx.moveTo(-45, -30);
                this.ctx.lineTo(15, -30);
                this.ctx.lineTo(15, 0);
                this.ctx.lineTo(45, 0);
                this.ctx.lineTo(45, 30);
                this.ctx.lineTo(-15, 30);
                this.ctx.lineTo(-15, 0);
                this.ctx.lineTo(-45, 0);
                this.ctx.lineTo(-45, -30);
                this.ctx.closePath();
                break;
            
            case "l":
                this.width = 60;
                this.height = 90;
                if (this.rotate_flag == 1 || this.rotate_flag == 3){
                    this.width = 90;
                    this.height = 60;
                }
                this.ctx.beginPath();
                this.ctx.moveTo(-30, -45);
                this.ctx.lineTo(30, -45);
                this.ctx.lineTo(30, -15);
                this.ctx.lineTo(0 , -15);
                this.ctx.lineTo(0, 45);
                this.ctx.lineTo(-30, 45);
                this.ctx.lineTo(-30, -45);
                this.ctx.closePath();
                break;
        }

        this.ctx.restore();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.fillStyle = null;
    }
    
    //motion function
    this.newPos = function() {
        this.y += this.speed_y;
    }

    //Detect if block is cliked
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

//Randomiser function
function randomLetter(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
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
