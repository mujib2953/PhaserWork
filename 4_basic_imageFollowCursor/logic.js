/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 18:25:59
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
	
	// --- loading the image from the sprite
	this.game.load.image( 'phaserText', '../repo/images/phaser.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	var centX = this.game.world.centerX,
		centY = this.game.world.centerY;
	
	this.SP_phaserText = this.game.add.sprite( centX, centY, 'phaserText' );
	this.SP_phaserText.anchor.set( 0.5 );


	// --- start the physics of the game
	this.game.physics.startSystem( Phaser.Physics.ARCADE );

	// --- motion to the image
	this.game.physics.arcade.enable( this.SP_phaserText )

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	// --- if distance between pointer cordiante and the text cordiante is greater that 8px then this will move

	if( this.game.physics.arcade.distanceToPointer( this.SP_phaserText, this.game.input.activePointer ) > 8 )
		this.game.physics.arcade.moveToPointer( this.SP_phaserText, 300 );
	else
		this.SP_phaserText.body.velocity.set( 0 );


};

/*
* render the view as per the requirements
*/
function render() {
	this.game.debug.inputInfo( 32, 32 );
};