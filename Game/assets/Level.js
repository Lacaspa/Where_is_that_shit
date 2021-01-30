
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
		
		// prefbObject
		const prefbObject = new PrefbObject(this, 135, 508);
		this.add.existing(prefbObject);
		
		this.bgGrande = bgGrande;
		this.hand = hand;
		this.btn1 = btn1;
		this.btn2 = btn2;
	}
	
	/* START-USER-CODE */
	hand_reset(){
    // ...
			this.tweens.add({
			targets: this.hand,
			y: 910,
			x: 320,
			ease: 'Power1',
			duration: 1000,
			delay: 10
			});	
 		}
		 // funcion de boton start o play
	playf(pointer, localX, localY, event){
		// mover camara hacia abajo
	 	this.tweens.add({
			targets: this.cameras.main,
			y: -450,
			ease: 'Power1',
			duration: 3000,
			delay: 1000
		});
		// mover mano 
		/* this.tweens.add({
			targets: this.hand,
			y: this.hand.y + 600,
			ease: 'Power2',
			duration: 2000,
			delay: 2500
		});
		*/
		
			
	}
	// acciones para boton2 how to play
	howtof(pointer, localX, localY, event){
		// ...
		console.log("boton2 si\n");
	}
	// metodo create
	create(){
		this.mycreate();
		// inicializar parametros de la camara
		this.cameras.main.setSize(640,1428);
		this.cameras.main.setBounds(0,0,640,1428);

		// inicializar puntero como activo
		this.pointer = this.input.activePointer;
		// establecer boton como interactivo en on click
		this.btn1.setInteractive().on('pointerdown',this.playf,this);
		// include phisics to hand
		
	}

	update(){
		
		if (this.pointer.isDown) {
			// almacenar valores de puntero
			var touchX = this.pointer.x;
			var touchY = this.pointer.y;
			// mover mano a dichos valores de puntero
			this.tweens.add({
			targets: this.hand,
			y: touchY+450,
			x: touchX,
			ease: 'Power1',
			duration: 500,
			delay: 10
			});
		}
	// en off click la mano vuelve a su origen
	this.scene.scene.input.on('pointerup', this.hand_reset,this);
		

	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
