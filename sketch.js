var ship=[];
var zombie = [];
var drops = []; // thêm array đạn
let img;
let over;
var dones =[];
var createZombie;
var score;
var mode;

function setup() {
    mode=0;
    img = loadImage('./image/tenor.gif');
    over =loadImage('./image/gameover.gif')
    createCanvas(1530, 750); // kích thước khung hình trò chơi
    // createCanvas( 600, 400);
    ship = new Ship();
    score = new score(); 
}
function draw() {
    clear();
    if(mode==0){
        background(img);
        let h = random(0, 360);
        fill(h, 255, 255);
        textSize(60);
        // text('hello',400,400)
        textAlign(CENTER, BASELINE);
        text("1. EASY", 750, 300);
        text("2. MEDIUM", 750, 380);
        text("3. HARD", 750, 460);

    }
    if(mode==1){
        background(img); //màu nền
        score.show();
        ship.show();
        ship.move();
        for (var j = 0; j < zombie.length; j++) {
            if(ship.hits(zombie[j])){
                zombie = [];
                drops=[];
                clearInterval(createZombie);
                score.reset();
                ship.reset();
                mode=2;
            }
        }
       
    
        for (var i = 0; i < drops.length; i++) {
            drops[i].show();
            drops[i].move();
            for (var j = 0; j < zombie.length; j++) {
               
                if (drops[i].hits(zombie[j])) {
                    if (zombie[j].blood) {
                        zombie[j].subBlood();
                    } else {
                        let done = new Done(zombie[j].x,zombie[j].y);
                        // document.getElementById('score').innerText = (score += 1)
                        score.add();
                        zombie.splice(j, 1);
                        // dones.push(done); 
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
    
        var edge = false; // nhận biết xem gà đã chạm viền hay chưa
        for (var i = 0; i < zombie.length; i++) {
            zombie[i].show();
            zombie[i].move(i);
            if (zombie[i].x > width - 90 || zombie[i].x < 10) {
                edge = true;
            }
            if (zombie[i].y > height-150) {
                zombie = [];
                drops=[];
                clearInterval(createZombie);
                score.reset();
                ship.reset();
                mode=2;
            }
        }
    
        // nếu gà có bất cứ con gà nào va vào viền khung hình thì tất cả gà sẽ chạy một method shiftDown()
        if (edge) {
            for (var i = 0; i < zombie.length; i++) {
                zombie[i].shiftDown();
            }
        }
    }
    if(mode==2){
        background(over);  
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
    if(keyCode===ENTER){
        mode=0;
    }
    if (key === '1') {
        if(mode!=1){
            createZombie = setInterval(() => {
                zombie.push(new Zombie(width / 2, Math.floor(Math.random() * 200))) // mình muốn gà của mình khởi tạo ở các vị trí ngẫu nhiên nên sẽ dùng hàm random()
            }, 1000);
            mode = 1;
        }
    
    }
    if (key === '2') {
        if(mode!=1){
            createZombie = setInterval(() => {
                zombie.push(new Zombie(width / 2, Math.floor(Math.random() * 200))) // mình muốn gà của mình khởi tạo ở các vị trí ngẫu nhiên nên sẽ dùng hàm random()
            }, 900);
            mode = 1;
        }
      
    }
    if (key === '3') {
        if(mode!=1){
            createZombie = setInterval(() => {
                zombie.push(new Zombie(width / 2, Math.floor(Math.random() * 200))) // mình muốn gà của mình khởi tạo ở các vị trí ngẫu nhiên nên sẽ dùng hàm random()
            }, 400);
            mode = 1;
        }
    }
}

function keyReleased() {
    if (key !== ' ') {
        ship.setxDir(0);
        ship.setyDir(0)
    }
}
