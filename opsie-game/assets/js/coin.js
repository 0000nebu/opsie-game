class Coin {
    constructor(ctx, x, y, vx, src, w, h){
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.vx = -vx

        this.sprite = new Image();
        this.sprite.src = src;
        this.sprite.onload = () => {
            this.sprite.isReady = true;
      };

    }

    move(){

        this.x += this.vx
      
    }

    draw (){
        if (this.sprite.isReady) {

            
            this.ctx.drawImage(
             this.sprite,
                this.x,
                this.y,
                this.w,
                this.h

            ); 
  
    }
    

    }


}