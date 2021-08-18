const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

Game.prototype.initializeGame = function () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [
        this.enemies.push(new Enemy('goblin', 'sword')),
        this.enemies.push(new Enemy('orc', 'baseball bat')),
        this.enemies.push(new Enemy('skeleton', 'axe')),
    ];
    this.currentEnemy = this.enemies[0];
    this.player;
}

module.exports = Game;

inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    // destructure name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);

        // test the object creation
        this.startNewBattle()
    });