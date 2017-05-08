/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 11:36:54
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
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	var data;

	this.bmd = this.game.make.bitmapData( this.game.width, this.game.height );

	this.bmdDest = this.game.make.bitmapData( this.game.width, this.game.height );
	this.bmdDest.addToWorld();

	this.color = Phaser.Color.HSVColorWheel();

	this.game.input.addMoveCallback( paint, this );

	this.iterate = 0;

	this.recto = new Phaser.Rectangle( 0, 0, this.game.width, this.game.height );

	// -- Here r --> rotaion and s --> scale
	data = { r: 0, s: 0.5 };

	this.game.add.tween( data ).to( {
		r: 360, 
		s: 2
	}, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true );

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	this.bmdDest.fill( 0, 0, 0, 0.1 );
	this.bmdDest.copy( this.bmd, 0, 0 );
};

/*
* render the view as per the requirements
*/
function render() {

};

function paint( pointer, x, y ) {

	if( pointer.isDown ) {
		this.bmd.circle( x, y, 4, this.color[ this.iterate ].rgba );
		this.iterate = this.game.math.wrapValue( this.iterate, 1, 359 );
	}

};