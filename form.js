class Form{
    constructor(){
        this.input = createInput("Playername");
        this.button = createButton("Go");
        this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("CAR RACE");
        title.position(150,15);
        this.input.position(150,100);
        this.button.position(150,150);
        this.button.mousePressed(()=>{
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("WELCOME "+player.name);
            this.greeting.position(150,250);
        });
    }
}