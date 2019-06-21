// Enemies our player must avoid
let scorecard=document.getElementById('scoreCard')
let score=0;
var Enemy = function(x,y,speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
   this.x=x;
   this.y=y;
   this.speed=speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers
  this.x=this.x+this.speed*dt;
  if(this.x==0){
    this.speed=100+Math.floor(Math.random()*300);
  }
  if(this.x>500){
    this.x=0;
    this.speed=100+Math.floor(Math.random()*300);
  }

   if(player.x<this.x+70 && player.x+70>this.x && player.y<this.y+70 && player.x+70>this.y){
     score=0;
     player.x=200;
     player.y=400;
     Swal.fire({
          title: 'Sorry',
          html:  'You Lost The Game',
          animation: true,
          confirmButtonText: 'Play Again',
        }).then(() => {
          document.location.reload();
        });
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
}

Player.prototype.update = function(dt) {

}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyLocations = [60, 144, 226];
enemyLocations.map((positionY) => {
  var enemyItem = new Enemy(0, positionY, 150);
  allEnemies.push(enemyItem);
})
var player = new Player(200, 400);
Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.x = this.x - 101;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
    case 'right':
      this.x = this.x + 101;
      if (this.x > 400) {
        this.x = 400;
      }
      break;
    case 'up':
      this.y = this.y - 83;
      if (this.y < 0) {
        setTimeout(() => {
          this.x = 200;
          this.y = 400;
        }, 120);
        score=score+1;
        scorecard.innerHTML="<h2>Total Score :"+score+"</h2>";
        if(score>=10){
          Swal.fire({
          title: 'congratulations',
          html: 'You Have Successfully Completed the Game with Points '+score,
          confirmButtonText: 'Play Again',
        }).then(() => {
          document.location.reload();
        });
        }
      }
      break;
    case 'down':
      this.y = this.y + 83;
      if (this.y > 400) {
        this.y = 400;
      }
      break;
    default:
  }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
