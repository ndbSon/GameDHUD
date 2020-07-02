function Done(x,y) {
    var img = loadImage('./image/bom.gif');
    this.x = x;
    this.y = y;
    this.toDel = false;
   
    this.show= function(){
        push();
        noStroke();
        translate(this.x, this.y);
        image(img, 5, 5);
        pop();
    };
    this.remove = function () {
        // this.toDel = true;
        setTimeout(function(){
            this.toDel = true;
        },1000)
    }
}