class Form{
    constructor(){}
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(130,0) 

        var input=createInput("name")
        var button=createButton("log in")
        var greeting=createElement("h3")
        input.position(130,150)
        button.position(250,200)

        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value()
        greeting.html("hello "+name)
        greeting.position(130,150)

        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)
    })
}
}