/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 13:33:18
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

	this.game.load.image( 'crystal', '../repo/images/jim_sachs_time_crystal.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.bmd = this.game.make.bitmapData();
	this.bmd.load( 'crystal' );
	this.bmd.addToWorld( this.game.world.centerX, this.game.world.centerY, 0.5, 0.5 );

	this.game.input.onDown.add( recolor, this );

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

function recolor() {
	// (sourceR, sourceG, sourceB, sourceA, destR, destG, destB, destA, region)
	this.bmd.replaceRGB( 0, 85, 255, 255, 0, 250, 40, 255 );
}