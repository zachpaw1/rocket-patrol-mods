class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        
        // load audio
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
        this.load.audio('bgm', './assets/assets_bgm.mp3');
    }

    create() {
        // background music
        this.bgm = this.sound.add('bgm');
        this.bgm.play();
        this.bgm.loop = true;

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

    // show menu text
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize * 2 - borderPadding * 2, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize * 1 - borderPadding * 1, 'P1, use ←→ arrows to move & ↑ arrow to fire', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'P2, use (A) and (D) keys to move & (W) to fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                jetSpeed: 5,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
            this.bgm.stop();
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {

            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                jetSpeed: 7,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
            this.bgm.stop();
        }
    }
}