/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 11:18:41
*/

'use strict';
var oScope = {};

$( document ).ready( function() {
	console.log( '%c Phaser Started. ', 'background: black; color: white' );
	createGame.call( oScope );
} );

/*
* Create the Game canvas
*/
function createGame() {
	this.game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'phaser-example', {
		preload: preload,
		create: create,
		update: update,
		render: render
	} );
};

/*
* Preload the assests
*/
function preload() {
	
	this.game.load.image('loop', '../repo/images/loop.png');
	this.game.load.atlas( 'seacreature', '../repo/anim/atlas/seacreatures_json.png', '../repo/anim/atlas/seacreatures_json.json' );
	
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.loop = this.game.make.sprite(0, 0, 'loop');
	this.loop.anchor.set(0.5);
	
	this.crab = this.game.make.sprite( 0, 0, 'seacreature', 'crab10015' );

	// --- creating bitmap
	this.bmd = this.game.add.bitmapData( this.game.width, this.game.height );
	this.bmd.addToWorld();

	//	Disables anti-aliasing when we draw sprites to the BitmapData
	this.bmd.smoothed = false;

	this.bmd.draw( this.crab, 10, 10 );

	this.game.input.addMoveCallback(paint, this);

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	this.loop.rotation += 0.1;
};

/*
* render the view as per the requirements
*/
function render() {

};

function paint(pointer, x, y) {

	if (pointer.isDown) {
		this.bmd.draw( this.loop, x, y);
	}

}