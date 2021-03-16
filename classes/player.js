class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = "";
    }


    getCount(){
        var playerCountRef = db.ref('playerCount');
        playerCountRef.on("value", (data)=>{playerCount = data.val()});
    }

    static getAllInfo(){
        var infoRef = db.ref('players');
        infoRef.on("value", (data)=>{allPlayers = data.val()});
    }

    updateCount(value){
        db.ref('/').update({playerCount: value});
    }
    update(){
        var playerIndex = "players/player"+this.index;
        db.ref(playerIndex).set({name: this.name, distance: this.distance});
    }
}