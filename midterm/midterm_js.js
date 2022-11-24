function component(name, x, y) {
    this.width;
    this.height;
    this.name = name;
    this.x = x;
    this.y = y;
    this.speed_x = 0;
    this.speed_y = 30;
    this.rotate_flag = 0;
    this.old_flag = 0;

    //small adjust to align shape to grid after rotation
    this.adjust = function(){
        if ((this.name == "o") && (this.y < 0) ){
            // console.log(this.y);
            this.x += 15;
            return;
        }

        // if ((this.name == "E" || this.name == "S"|| this.name == "l") && (this.y < 15) ){
        //     // console.log(this.y);
        //     this.y -= 15;
        //     return;
        // }

        if ((this.name == "E" || this.name == "S" || this.name == "o" || this.name == "l") ){
            return;
        }

        if (this.old_flag != this.rotate_flag ){
            this.old_flag = this.rotate_flag;
            if (this.rotate_flag == 1|| this.rotate_flag == 0){
                this.x += 15;
                this.y -= 15;
            }
            else if (this.rotate_flag == 2 || this.rotate_flag == 3){
                this.x -= 15;
                this.y -= 15;
            }
            return;
        }
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
                ctx.fillRect(-30, -30, 60, 60);
                ctx.strokeRect(-30, -30, 60, 60);
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
                ctx.translate(15, 0);
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
        ctx.fillStyle = '#8ED6FF';
        ctx.fill();
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


function randomLetter(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

//for properly aligning bottom of tetris block with top of canvas
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
