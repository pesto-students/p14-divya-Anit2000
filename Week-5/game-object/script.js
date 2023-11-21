class Game {
    constructor() {
        this.lives = 3;
        this.coins = 0;
    }
    get points() {
        return this.coins * 10;
    }
    playerDies() {
        this.lives = this.lives > 0 ? --this.lives : 0;
    }
    newGame() {
        this.lives = 3;
        this.coins = 0;
    }
}

const game1 = new Game();
console.log(game1.points)
game1.playerDies();
console.log(game1);
game1.newGame();
console.log(game1)
