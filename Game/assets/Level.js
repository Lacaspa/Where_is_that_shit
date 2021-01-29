
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Image} */
		this.bgGrande;
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
	
	mycreate() {
		
		// bgGrande
		const bgGrande = this.add.image(0, 368, "bgGrande");
		bgGrande.setOrigin(0, 0);
		
		// hand
		const hand = this.add.sprite(320, 334, "hand");
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
		
		this.bgGrande = bgGrande;
		this.hand = hand;
		this.btn1 = btn1;
		this.btn2 = btn2;
	}
	
	/* START-USER-CODE */
	playf(pointer, localX, localY, event){
		// ...
		console.log("boton1 si\n");
		
		
		//this.hand.y += 380;

		var tween = this.tweens.add({
			targets: this.cameras.main,
			y: -450,
			ease: 'Power1',
			duration: 3000,
			delay: 1000
		});

		var tween2 = this.tweens.add({
			targets: this.hand,
			y: 900,
			ease: 'Power1',
			duration: 2000,
			delay: 2500
		});
		
			
	}

	howtof(pointer, localX, localY, event){
		// ...
		console.log("boton2 si\n");
	}

	create(){
		this.mycreate();
		this.cameras.main.setSize(640,1428);
		this.cameras.main.setBounds(0,0,640,1428);
		
		this.btn1.setInteractive().on('pointerup',this.playf,this);
		
		console.log(this.scene)
		
		this.scene.scene.input.on('pointerdown', function(pointer){
			var touchX = pointer.x;
			var touchY = pointer.y;
			// ...
			console.log(touchX)
		 });

		this.pointer = this.scene.input.activePointer;
		if (this.pointer.isDown) {
			var touchX = pointer.x;
			var touchY = pointer.y;
			// ...
		}
			
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
