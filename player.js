class Player{
    constructor(){
this.index = null;
this.distance = 0;
this.name = null;
    }
 getCount(){
    var playerCountref = database.ref('playerCount');
playerCountref.on("value",function(data){
     playerCount = data.val();
 }); 
}
updateCount(Count){
    database.ref('/').update({
        playerCount:Count
    });
}
update(){
    var playerindex="players/player"+this.index;
    database.ref(playerindex).set({name:this.name,distance:this.distance});
}   
static getPlayerinfo(){
    var playerinforef = database.ref('players');
playerinforef.on("value",(data)=>{allPlayers=data.val();})
}
}