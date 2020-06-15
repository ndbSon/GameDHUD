var ship;
var zombie = [];
var drops = []; // thêm array đạn
let img;
var dones =[];
function setup() {
    img = loadImage('tenor.gif');
    createCanvas(1530, 750); // kích thước khung hình trò chơi
    ship = new Ship();
    
    // setInterval(() => {
    //     zombie.push(new Zombie(width/2, Math.floor(Math.random() * 200))) // mình muốn gà của mình khởi tạo ở các vị trí ngẫu nhiên nên sẽ dùng hàm random()
    // }, 1000);
    zombie.push(new Zombie(width/2, 200))

}

function draw() {
   
    background(img); //màu nền
    ship.show();
    ship.move();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < zombie.length; j++) {
            console.log("x: ",zombie[j].x)
            if (drops[i].hits(zombie[j])) {
                if (zombie[j].blood) {
                    zombie[j].subBlood();
                } else {
                    let done = new Done(zombie[j].x,zombie[j].y);
                    zombie.splice(j, 1);
                    dones.push(done);
                   
                }
                drops[i].remove();
            }
        }
    }
    for (var i = drops.length - 1; i >= 0; i--) {
        if (drops[i].toDel) {
            drops.splice(i, 1);
        }
    }
    for (var i = 0; i < dones.length; i++) {
        dones[i].show();
        setTimeout(function(){
            dones.splice(i,1);
        },2000)
    }



    var edge = false; // nhận biết xem gà đã chạm viền hay chưa
    for (var i = 0; i < zombie.length; i++) {
        zombie[i].show();
        zombie[i].move(i);
        if (zombie[i].x > width - 90 || zombie[i].x < 10) {
            edge = true;
        }
    }

    // nếu gà có bất cứ con gà nào va vào viền khung hình thì tất cả gà sẽ chạy một method shiftDown()
    if (edge) {
        for (var i = 0; i < zombie.length; i++) {
            console.log("cham vien")
            zombie[i].shiftDown();
        }
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ship.setxDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setxDir(-1)
    }else if(keyCode === DOWN_ARROW){
        ship.setyDir(1)
    }else if(keyCode === UP_ARROW){
        ship.setyDir(-1)
    }
    if (key === ' ') {
        var drop = new Drop((ship.x+100), ship.y+150);
        drops.push(drop);
    }
}
function keyReleased() {
    if (key !== ' ') {
        ship.setxDir(0);
        ship.setyDir(0)
    }
}