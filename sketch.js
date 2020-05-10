var database,form,player,game,playerCount,gameState;
var allPlayers;
gameState=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getstate();
  game.start();
  }

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    Game.play();
  }
}
