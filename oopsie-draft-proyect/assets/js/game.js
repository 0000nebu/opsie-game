class Game {

    constructor(canvasId, visibleRestart) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.heart = new Image()
        this.heart.src = '/assets/img/heart.png'
        //onload falta
        this.drawIntervalId = undefined;
        this.fps = 60;

        //this.background = new Background(this.ctx);
        this.cloudsFront = new CloudsFront(this.ctx)
        this.cloudBack = new CloudsBack(this.ctx)
        this.stars = new Stars(this.ctx)
        this.road = new Road(this.ctx)
        this.sky = new Sky(this.ctx)
        this.palms = new Palms(this.ctx)

        this.player = new Player(this.ctx, 150, 320)
        this.coins =[];
        this.cars = [];

        this.score = 0;
       
        this.tick = Math.floor(Math.random() * (300 - 100 + 1) + 100);
        this.tock = Math.floor(Math.random() * (200 - 100 + 1) + 100);
        this.lives = 3;
        this.timeLapse = 0;

       this.colision = false;
      
       this.visibleRestart = visibleRestart;

       //this.audio = new Audio("/assets/audio/main.mp3");
       
       

       this.opsieAudio = new Audio("/assets/sound/ooopsie.mp3");
       this.opsieAudio.volume = 0.15;
       
       this.coinAudio = new Audio("/assets/sound/coin.mp3");
       this.opsieAudio.volume = 0.15;

       this.highScoresButton = document.getElementById("highScoresButton");
        this.highScoresButton.addEventListener("click", showHighScores);

      this.mainAudio = new Audio("/assets/sound/mainAudio.mp3");
        this.mainAudio.volume = 0.15;  

    }

    onKeyDown(event) {
        this.player.onKeyDown(event);
    }

    start() {
        
        if (!this.drawIntervalId) {

            this.drawIntervalId = setInterval(() => {
                this.clear();
                this.move();
                this.draw();
                this.checkOpsies();
                this.coinCount();
                this.addCar();
                this.addCoin();
                this.drawScore();

                this.mainAudio.play();
                
                if(this.timeLapse % 60 === 0){
                    this.score += 100;
                }
                this.timeLapse++;
            }, 1000 / this.fps);
        }
        
    }

    stop() {
        clearInterval(this.drawIntervalId);
        this.drawIntervalId = undefined;
        this.drawScore();
        setTimeout(()=>{
            saveScore(this.score);
            this.mainAudio.pause();
        },500)
        
    }


    draw() {

        this.sky.draw();
        this.stars.draw();
        this.cloudBack.draw();
        this.road.draw();
        this.cloudsFront.draw();
        this.player.draw();
        this.drawHearts()
        this.coins.forEach((coin) => {
            coin.draw();
        })
        this.cars.forEach((car) => {
            car.draw();
        })
        this.palms.draw();
    }

    //reload

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move() {

        this.sky.move();
        this.cloudBack.move();
        this.stars.move();
        this.road.move();
        this.palms.move();
        this.cloudsFront.move();
        this.player.move();
        this.coins.forEach((coin) => {
            
            coin.move();
            
        }) 
        this.cars.forEach((car) => {
            car.move();
        })

    }

    addCoin(){
      const coins = [
            new Coin(this.ctx, this.canvas.width, 318, 6, '/assets/img/sprite_cassete.png', 68, 39),
            new Coin(this.ctx, this.canvas.width, 270, 6, '/assets/img/sprite_cassete.png', 68, 39)  
        ]

        this.tock--

        if (this.tock <= 0) {
            const coin = coins[Math.floor(Math.random() * (2))]
            this.coins.push(coin)
            this.tock = Math.floor(Math.random() * (400 - 100 + 1) + 100)
        }
    }

    coinCount(){
        const p = this.player;
        const opsieNum = 0;
        

        this.coins = this.coins.filter((c) => {
            const colx = p.x + p.w >= c.x && p.x < c.x + c.w;
            const coly = p.y + p.h >= c.y && p.y < c.y + c.h;
    
            if (colx && coly) {
                const coinX = p.x - 80;
                const coinY = p.y - 45;
                
                this.coins = this.coins.filter((coin) => coin !== c);
                this.coinAudio.play();
                this.score += 55;
                return false;
            }
    
            return true;
        });
        
    }

    addCar() {

        const cars = [
            new Car(this.ctx, this.canvas.width, 325, 2, '/assets/img/sprite_enemy_temp.png', 40, 40),
            new Car(this.ctx, this.canvas.width, 325, 2, '/assets/img/sprite_TAXI.png', 90, 40),
            new Car(this.ctx, this.canvas.width, 260, 4, '/assets/img/sprite_bus.png', 120, 60)
        ]

        this.tick--

        if (this.tick <= 0) {
            const car = cars[Math.floor(Math.random() * (3))]
            this.cars.push(car)
            this.tick = Math.floor(Math.random() * (200 - 100 + 1) + 100)
        }

        if (this.score > 3000) {
            
            this.cars.forEach((car) => {
                car.x -= 2
            })
        }

        if (this.score > 4000) {
            
            this.cars.forEach((car) => {
                car.x -= 9

            })
        }


        //location.reload.
        //local.storage (navegador) 

 


    }

    opsieAlert(ctx, playerX, playerY, src = '/assets/img/opsie_sprite.png') {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            //img.width = 1;
            //img.height = 1;
            ctx.drawImage(img, playerX, playerY);
        }

    


    }

    fireAlert(ctx, playerX, playerY) {
        const img = new Image();
        img.src = '/assets/img/fire_sprite.png';
        img.onload = () => {
            img.width = 1;
            img.height = 1; 
          ctx.drawImage(img, playerX, playerY);
        };
      }

    checkOpsies() {
        const p = this.player;
        const opsieNum = 0;
        

        this.cars = this.cars.filter((e) => {
          const colx = p.x + p.w >= e.x && p.x < e.x + e.w;
          const coly = p.y + p.h >= e.y && p.y < e.y + e.h;
      
          if (colx && coly) {


            const opsieX = p.x - 80;
            const opsieY = p.y - 45;

            const fireX = p.x + 40
            const fireY = p.y + 10

            //const fireX = p.x - 
            //const fireY = p.y - 400
            //this.opsieAlert(this.ctx, opsieX, opsieY);
            this.lives--;
            this.opsieAudio.play();
            
            let timeOpsie = 0;

            const intervalId = setInterval(() => {
                if (this.lives <= 0) {
                    this.opsieAlert(this.ctx, fireX, opsieY, "/assets/img/fire_sprite.png");
                } else {
                    this.opsieAlert(this.ctx, opsieX, opsieY);
                }
                
                timeOpsie++;

                if (timeOpsie === 80) {
                    clearInterval(intervalId);
                    this.colision = false; 
                }

                
            }, 1000/(this.fps*10));


            //no lo puedo hacer con el mismo intervalId porque es una rave. 
            //(necesito que se pinte más rapido que los fps)
             
            if (this.lives <= 0) {
                
                const gameOverMessage = document.getElementsByClassName('game-over')[0];
                gameOverMessage.classList.remove('hidden');
                
                this.visibleRestart();
                this.stop();
                
            }
            
            return false;
          }  
      
          return true;

        });


             

    }

    clearCanvas() {
        const canvas = document.getElementById(this.canvasId);
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

    drawHearts(){
        for(let i = 0; i < this.lives; i++){
            this.ctx.drawImage(this.heart, i*55, 10, 50, 50);
            
        }
    }

    drawScore(){
        
        this.ctx.save();
       
        this.ctx.fillStyle = "white";
        this.ctx.font = "24px Arial";
        this.ctx.fillText(`SCORE: ${this.score.toString().padStart(5, '0')}` , 600, 34);
    
       this.ctx.restore();

       
        
    }

}
