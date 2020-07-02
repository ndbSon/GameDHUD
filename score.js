function score() {
    this.diem =0;
    this.show= function(){
        fill(255);
        rectMode(CENTER);
        push();
        textSize(30);
        text(`score: ${this.diem}`,20,30)
        pop();
    };
    this.add=function(){
        this.diem+=1;
    }
    this.reset=function(){
        this.diem=0;
    }
}