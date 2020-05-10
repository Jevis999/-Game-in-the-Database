class Game{
    constructor(){

    }
 getstate(){
    var gameStateref = database.ref('gameState');
 gameStateref.on("value",function(data){
     gameState = data.val();
 }); 
}
update(state){
    database.ref('/').update({
        gameState:state
    });
}
async start(){
    if(gameState===0){
        form = new Form();
        form.display();
        player = new Player();
        var playercountref = await database.ref('playerCount').once("value");
        if(playercountref.exists()){
            playerCount = playercountref.val();
            player.getCount();
        }
    }
}

play(){
    form.hide();
    textSize(30);
    text("GAME STARTS",500,150);
    Player.getPlayerinfo();
    if(allPlayers!==undefined){
    var displayposition = 160;
    for(var ok in allPlayers){
        if(ok ==="player"+player.index){
            fill("red");
        }else{
            fill("black");
        }
        displayposition = displayposition + 20;
        textSize(35);
        text(allPlayers[ok].name + ":" + allPlayers[ok].distance,500,displayposition);
        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance += 20;
    player.update();
    }
}
}