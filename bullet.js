function Drop(x, y) {
    var img = loadImage('bullet.gif');
    this.x = x;
    this.y = y;
    this.r = 8;
    this.rotate = 1.5559;
    this.speed = 10;
    this.toDel = false;

    this.show = function() {
        push()
        noStroke();
        translate(this.x, this.y - 200);
        rotate(this.rotate);

        for(let i = 0; i > -5; i--) {
          fill(color(255, 255, 255, 255 + i * 12));
          rect(i * this.speed * 0.5 + 60 + this.speed * 4, 0, 5, 5 + i * 0.1);
        // image(img, 5, 5);

        }
        pop();
    }

    this.hits = function(chicken) {
        var d = dist(this.x, this.y, chicken.x, chicken.y);
        if (d < this.r + chicken.r + 30) {
            return true;
        }
        
        return false;
    }
    
    this.remove = function () {
        this.toDel = true;
    }
    
    this.move = function() {
        this.y = this.y - this.speed;
    }
}