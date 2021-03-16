var db;
var playerCount;
var gameState = 0;
var player, form, game, allPlayers;
var car1, car2,  car3,  car4;
var cars;
var image1, image2, image3, image4, track;

function preload(){
    image1 = loadImage('images/car1.png');
    image2 = loadImage('images/car2.png');
    image3 = loadImage('images/car3.png');
    image4 = loadImage('images/car4.png');

    track = loadImage('images/track.jpg');
}

function setup(){
    db = firebase.database();


    createCanvas(displayWidth-4, displayHeight-170);


    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");


    if(playerCount === 4){game.update(1);}
    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}