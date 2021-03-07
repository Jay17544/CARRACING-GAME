class Form{
    constructor(){
         this.input=createInput("name")
          this.button=createButton("play")
        this.greeting=createElement("h3")
    }
    hideAll(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
        
    }
    display(){
        var title= createElement('h2')
        title.html("Car RACING Game")
        title.position(130,0)
       this.input.position(130,150)
        this.button.position(250,300)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            var name=this.input.value()
            console.log(name)
            this.greeting.html("hello "+name)
            this.greeting.position(130,160)
            playerCount+=1
            player.index=playerCount
            player.update(name)
            player.updateCount(playerCount)
        })
        
    }
}