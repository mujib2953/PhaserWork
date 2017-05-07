/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 15:38:16
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
	
	this.game.load.image( 'back', '../repo/images/swirl1.jpg' );
	this.game.load.image( 'loop', '../repo/images/glass.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.add.image( 0, 0, 'back' );

	this.loop = this.game.make.sprite( 0, 0, 'loop' );
	
	this.loop.anchor.set( 0.5 );
	this.loop.alpha = 0.01;

	this.bmd = this.game.add.bitmapData( this.game.width, this.game.height );
	this.bmd.fill( 0, 0, 0, 1 );

	this.bmd.addToWorld();

	this.game.input.addMoveCallback( paint, this );

	this.game.add.tween( this.loop.scale ).to( {
		x: 0.75,
		y: 0.75
	}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true );

	this.game.add.tween( this.loop ).to( {
		alpha: 0.25
	}, 1000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true );

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

function paint( pointer, x, y ) {

	if( pointer.isDown ) {
		this.bmd.draw( this.loop, x, y, null, null, 'destination-out' );
	}
};