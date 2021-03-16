function reset(){
    db.ref('/').update({gameState: 0});
    db.ref('/').update({playerCount: 0});
    db.ref('/').update({players: null});
}