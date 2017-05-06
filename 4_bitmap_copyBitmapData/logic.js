/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 00:39:20
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

	this.game.load.image( 'terminator', '../repo/images/Equality_by_Ragnarok.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.backgroundColor = '#2D2D2D';

	this.bmd_1 = this.game.make.bitmapData( 800, 600 );
	this.bmd_1.copy( 'terminator' );

	this.bmd_1.addToWorld();

	this.bmd_2 = this.game.make.bitmapData( 64, 64 );
	this.bmd_2.circle( 32, 32, 32, 'rgba( 255, 0, 255, 0.2 )' );

	this.game.input.addMoveCallback( paint, this );
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {};

/*
* render the view as per the requirements
*/
function render() {

};

/*
* Paints
*/
function paint( pointer, x, y ) {

	if( pointer.isDown ) {

		this.bmd_1.draw( this.bmd_2, x - 16, y - 16 );

	}

};