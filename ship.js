function Ship() {
    var img = loadImage('rocket.gif');

    this.x = width / 2;
    this.y = height - 150;
    this.xdir = 0; // hướng di chuyển
    this.ydir = 0;
    this.show= function(){
        // fill(255);
        rectMode(CENTER);
        // vẽ phi thuyền
        push();
        noStroke();
        translate(this.x, this.y);
        image(img, 5, 5);
        pop();
    };

    this.setxDir =function (dir) {
        this.xdir = dir; // đặt lại hướng di chuyển mỗi khi có sự kiện nhấn nút
    }
    this.setyDir =function (dir) {
        this.ydir = dir; // đặt lại hướng di chuyển mỗi khi có sự kiện nhấn nút
    }


    this.move = function() {
        if(this.x<width-150 && this.x>-55){
            this.x += this.xdir*10; // lúc này phi thuyền sẽ di chuyển sang  phải nếu xdir = 1 và ngược lại với xdir = -1
        }else {
            this.x-= this.xdir*15
        }
        
        if(this.y<height - 150 && this.y>-60){
            this.y += this.ydir*10;
            console.log("W: ",height - 150);
            console.log("X: ",this.y);
        }else if(this.y==height - 150){
            this.y -= 10;
        }else if(this.y<= -60){
            this.y += 10;
        }  
    }


}