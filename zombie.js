function Zombie(x, y) {

    var img = loadImage('./image/zombie.gif');

    this.blood = 1;
    this.x = x;
    this.y = y;
    this.rotate = 0;
    this.r = 100;
    this.xdir = 5;

    this.show = function () {
        push();
        noStroke();
        translate(this.x, this.y);
        // vẽ gà
        image(img, 5, 5);
        pop();
    }

    this.subBlood=function() {
        this.blood -= 1;
    }

    this.move= function(i) {
        if(i%3==0){
            this.x =this.x + this.xdir;
        }else{
            this.x =this.x - this.xdir;
        }
       
    }

    this.shiftDown= function() {
        this.xdir *= -1;
        this.y += this.r;
    }
}