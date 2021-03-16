class Game{
    constructor(){

    }

    update(state){
        db.ref('/').update({gameState: state});
    }
    getState(){
        var gameStateRef = db.ref('gameState');
        gameStateRef.on("value", (data)=>{gameState = data.val();});
        console.log(gameStateRef);
        console.log(gameState);
        //gameState = "waiting";
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await db.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 100);
        car1.addImage(image1);

        car2 = createSprite(300, 100);
        car2.addImage(image2);

        car3 = createSprite(500, 100);
        car3.addImage(image3);

        car4 = createSprite(700, 100);
        car4.addImage(image4);

        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getAllInfo();
        if(allPlayers != undefined){
            background(30, 255, 100);
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index = 0;
            var x = 175, y = 0;
            for(var person in allPlayers){
                index += 1;

                x += 200;
                y = height-allPlayers[person].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                    cars[index-1].shapeColor = "#00ffff";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y-1;
                }else{
                    cars[index-1].shapeColor = "#ff9900";
                }
            }
        }
        if(keyIsDown(UP_ARROW)
          && player.index != null
          && player.distance < displayHeight*5-200){
            player.distance += 10;
            player.update();
        }
        if(player.distance === displayHeight*5-200){
            gameState = 2;
            player.distance += 10;
            player.update();
            game.update(2);
        }
        drawSprites();
    }


    end(){
        console.log("*end*");
    }
}