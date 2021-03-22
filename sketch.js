var gameState=0,playerCount,form,player,game,database;

function setup(){
    createCanvas(400,400)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
    
}

