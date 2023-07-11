/*class Background {
    constructor(ctx) {
      this.ctx = ctx;
  
      this.x = 0;
      this.y = 0;
      this.w = this.ctx.canvas.width;
      this.h = this.ctx.canvas.height;
  
      
  
      this.sprite = new Image();
      this.sprite.src = "/assets/img/fondo-temp.png";
      this.sprite.onload = () => {
        this.sprite.isReady = true;
      };
    }

    move() {
        this.x += -3;

        if(this.x < -this.w){
            this.x = 0;
        }
    
    }
  
    draw() {
      if (this.sprite.isReady) {
        this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
        this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
      }
    }

 
  }
  */  

  class Road {
    constructor(ctx) {
        this.ctx = ctx;
    
        this.x = 0;
        this.y = 0;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        this.vx = 2;
    
        
    
        this.sprite = new Image();
        this.sprite.src = "/assets/img/road_sprite.png";
        this.sprite.onload = () => {
          this.sprite.isReady = true;
        };

        this.tick = 0
      }
  
      move() {
          this.x += -9;
  
          if(this.x < -this.w){
              this.x = 0;
          }
        /* Asi es como intenté que fuera cada vez más rápido
          this.x += -this.vx;
  
          if(this.x < -this.w){
              this.x = 0;

          this.vx = setInterval(() => {
             this.vx +2
          }, 10000 * 100)
          */
      
      }
    
      draw() {
        if (this.sprite.isReady) {
          this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
          this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
        }
      }
  
   
    }
  

    class Sky {
        constructor(ctx) {
            this.ctx = ctx;
        
            this.x = 0;
            this.y = 0;
            this.w = 6000;
            this.h = this.ctx.canvas.height;
        
            
        
            this.sprite = new Image();
            this.sprite.src = "/assets/img/sky_sprite.png";
            this.sprite.onload = () => {
              this.sprite.isReady = true;
            };
          }
      
          move() {
              this.x += -5;
      
              if(this.x < -this.w){
                  this.x = 0;
              }

              
          
          }
        
          draw() {
            if (this.sprite.isReady) {
              this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
              this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
            }
          }
      
       
        }

        class Stars {
            constructor(ctx) {
                this.ctx = ctx;
            
                this.x = 0;
                this.y = 0;
                this.w = 1700;
                this.h = this.ctx.canvas.height;
            
                
            
                this.sprite = new Image();
                this.sprite.src = "/assets/img/stars_sprite.png";
                this.sprite.onload = () => {
                  this.sprite.isReady = true;
                };
              }
          
              move() {
                  this.x += -1;
          
                  if(this.x < -this.w){
                      this.x = 0;
                  }
              
              }
            
              draw() {
                if (this.sprite.isReady) {
                  this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
                  this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
                }
              }
            }
              
        class CloudsBack {
            constructor(ctx) {
                this.ctx = ctx;
                
                this.x = 0;
                this.y = 0;
                this.w = this.ctx.canvas.width;
                this.h = this.ctx.canvas.height;
                
                    
                
                this.sprite = new Image();
                this.sprite.src = "/assets/img/cloudsback_sprite.png";
                this.sprite.onload = () => {
                      this.sprite.isReady = true;
                    };
                  }
              
                move() {
                      this.x += -2;
              
                      if(this.x < -this.w){
                          this.x = 0;
                      }
                     
                  
                  }
                
                draw() {
                    if (this.sprite.isReady) {
                      this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
                      this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
                    }
                  }  

                  
           
            }     


            class CloudsFront {
              constructor(ctx) {
                  this.ctx = ctx;
                  
                  this.x = 0;
                  this.y = 0;
                  this.w = 1200;
                  this.h = this.ctx.canvas.height;
                  
                      
                  
                  this.sprite = new Image();
                  this.sprite.src = "/assets/img/cloud-front-sprite.png";
                  this.sprite.onload = () => {
                        this.sprite.isReady = true;
                      };
                    }
                
                  move() {
                        this.x += -1;
                
                        if(this.x < -this.w){
                            this.x = 0;
                        }
                       
                    
                    }
                  
                  draw() {
                      if (this.sprite.isReady) {
                        this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
                        this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
                      }
                    }  
  
                    
             
              }
    
              class Palms {
                constructor(ctx) {
                    this.ctx = ctx;
                    
                    this.x = 0;
                    this.y = 0;
                    this.w = 1200;
                    this.h = this.ctx.canvas.height;
                    
                        
                    
                    this.sprite = new Image();
                    this.sprite.src = "/assets/img/palmera-sprite.png";
                    this.sprite.onload = () => {
                          this.sprite.isReady = true;
                        };
                      }
                  
                    move() {
                          this.x += -9;
                  
                          if(this.x < -this.w){
                              this.x = 0;
                          }
                         
                      
                      }
                    
                    draw() {
                        if (this.sprite.isReady) {
                          this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
                          this.ctx.drawImage(this.sprite, this.x + this.w, this.y, this.w, this.h);
                        }
                      }  
    
                      
               
                }           