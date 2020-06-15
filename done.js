function Done(x,y) {
    var img = loadImage('bom.gif');
    this.x = x;
    this.y = y;
   
    this.show= function(){
        push();
        noStroke();
        translate(this.x, this.y);
        image(img, 5, 5);
        pop();
    };
}