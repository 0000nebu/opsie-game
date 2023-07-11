class Car {
    constructor(ctx, x, y, vx, src, w, h){
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.tick = 0;

        this.vx = -vx;
        

        this.sprite = new Image();
        this.sprite.src = src;
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
      };

    }

    move(){

        this.x += this.vx
      
    }

    draw (){
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
        if (this.tick > 3) {
           this.tick = 0;
         this.sprite.horizontalFrameIndex++;
      
           if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames - 1) {
              this.sprite.horizontalFrameIndex = 0;
          }
         }
    }
}