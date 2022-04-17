// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, keyL, keyR, keyFire) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);                            // add to existing, displayList, updateList
        this.isFiring = false;                               // track rocket's firing status
        this.moveSpeed = 2;                                  //pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket');     // add rocket sfx
        this.keyLft = keyL;
        this.keyRht = keyR;
        this.keyFre = keyFire;
    }

    update() {
        // left and right movement
        if(!this.isFiring) {
            if(this.keyLft.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (this.keyRht.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(this.keyFre) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();      // play sfx
        }
        // if fired, move up
        if(this.isFiring) {
            if(this.keyLft.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (this.keyRht.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }
    reset () {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}