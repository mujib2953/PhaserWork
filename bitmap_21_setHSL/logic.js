/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 14:00:04
*/

'use strict';
(function() {
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

	this.game.load.image( 'pic', '../repo/images/ships.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.backgroundColor = '#2D2D2D';

	this.bmd = this.make.bitmapData();
	this.bmd.load( 'pic' );

	var sprite = this.bmd.addToWorld( this.game.world.centerX, this.game.world.centerY, 0.5, 0.5, 3, 3 );
	sprite.smoothed = false;

	this.game.input.onDown.add( stratProcess, this );
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

function stratProcess() {
	this.bmd.shiftHSL( 0.1 );
};

}());
