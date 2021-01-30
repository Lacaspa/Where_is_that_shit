
// You can write more code here

/* START OF COMPILED CODE */

class PrefbObject extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "obj1", frame);
		
		// this (components)
		new PhysicsBody(this);
		new Physics(this);
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE *//* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
