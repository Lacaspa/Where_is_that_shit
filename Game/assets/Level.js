
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.hand;
		/** @type {Phaser.GameObjects.Sprite} */
		this.btn1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.btn2;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		//Camera
		var camera = scene.camera.add(0,0,640,960);
		
		// bgGrande
		const bgGrande = this.add.image(0, 368, "bgGrande");
		bgGrande.setOrigin(0, 0);
		
		// hand
		const hand = this.add.sprite(315, 354, "hand");
		hand.setOrigin(0.5, 1);
		
		// back1
		const back1 = this.add.image(0, 0, "back1");
		back1.setOrigin(0, 0);
		
		// btn1
		const btn1 = this.add.sprite(192, 141, "btn1");
		
		// btn2
		const btn2 = this.add.sprite(195, 255, "btn2");
		
		// chick
		this.add.image(358, 183, "chick");
		
		this.hand = hand;
		this.play_btn = btn1;
		this.howto_btn = btn2;

		this.play_btn.setInteractive().on('pointerup',this.playf);

		this.howto_btn.setInteractive().on('pointerup',this.howtof);
	}
	
	/* START-USER-CODE */
	playf(pointer, localX, localY, event){
		// ...
		console.log("boton1 si\n");
		this.game.
	}
	howtof(pointer, localX, localY, event){
		// ...
		console.log("boton2 si\n");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
