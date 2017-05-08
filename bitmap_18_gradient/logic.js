/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 13:25:54
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

	this.bmd = this.game.make.bitmapData( 800, 600 );
	this.bmd.addToWorld();

	this.innerCircle = new Phaser.Circle( 200, 200, 100 );
	this.outerCircle = new Phaser.Circle( 200, 200, 300 );


	this.game.add.tween( this.innerCircle ).to( { x: 100, y: 100, radius: 1 }, 3000, "Sine.easeInOut", true, 0, -1, true);

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	var grd = this.bmd.context.createRadialGradient( this.innerCircle.x, this.innerCircle.y, this.innerCircle.radius, this.outerCircle.x, this.outerCircle.y, this.outerCircle.radius );


	grd.addColorStop( 0, '#8ED6FF' );
	grd.addColorStop( 1, '#003BA2' );

	this.bmd.cls();
	this.bmd.circle( this.outerCircle.x, this.outerCircle.y, this.outerCircle.radius, grd );

};

/*
* render the view as per the requirements
*/
function render() {

};