let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//reserve keyboard vars
let keyW, keyA, keyD, keyLEFT, keyRIGHT, keyUP

// Name: Zachary Hollaway
// Project Title: Rocket Patrol Mods
// Date: 4/18/2022
// The project probably took around 12 hours to complete? Give or take an hour or so

// Rocket Patrol Mods list:
// Implement a simultaneous two player mode (30)
// Create a new spaceship type that's smaller, moves faster, and is worth more points (20)
// Create new artwork for all of the in game assets (20)
// Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
// Allow the player to control the Rocket after it's fired (5)
// Add background music (5)

// Citations:
// Reviewed the 4/13 and 4/15 lectures for implementation of two player mode
// Used code from labs.phaser.io to get the implementation of the particle emitter (link is in Canvas submission)
// Received help from Peyton Jones on how to get the particle emitter to actually work
// Used code that Jimmy shared on Discord to get looping music
// Background music is "The Sound of Water Drops" by Tomomi Kato on pixabay