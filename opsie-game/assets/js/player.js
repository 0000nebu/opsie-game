class Player {
    constructor(ctx, x, y){
        this.ctx = ctx;

        this.x0 = 0.1;
        
        this.x = x;
        this.y = y;
        this.w = 95;   
        this.h = 40;
        
        this.vy = -3;

        this.tick = 0;
        

        this.sprite = new Image();
        this.sprite.src = "/assets/img/sprite_car.png";
        this.sprite.verticalFrames = 1;
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrames = 3;
        this.sprite.horizontalFrameIndex = 0;

        this.sprite.onload = () => {
            this.sprite.isReady = true;
            this.sprite.frameWidth = Math.floor(
                this.sprite.width / this.sprite.horizontalFrames
              );
              this.sprite.frameHeight = Math.floor(
                this.sprite.height / this.sprite.verticalFrames
              );
        }

    }

    onKeyDown(event) {
        switch (event.keyCode){
            case KEY_UP:
                this.vy = -3
                break;
            case KEY_down:
                this.vy = 3
                break; 
        }

    }
    

    move(){
         // move car into the road. 
        this.y += this.vy
        if(this.y < 275) {
            this.y = 275
        } else if (this.y > 325){
            this.y = 325

        }
        
    }

    draw() {
        if (this.sprite.isReady) {
          this.ctx.drawImage(
            this.sprite,
            this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
            this.sprite.verticalFrameIndex * this.sprite.frameHeight,
            this.sprite.frameWidth,
            this.sprite.frameHeight,
            this.x,
            this.y,
            this.w,
            this.h
          );
          this.animate();
          }
        }
    
    

    animate(){

      this.tick++;
        if (this.tick > 7) {
           this.tick = 0;
         this.sprite.horizontalFrameIndex++;
      
           if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames - 1) {
              this.sprite.horizontalFrameIndex = 0;
          }
         }
    }

}