/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 14:32:04
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
	this.game.load.image('back', '../repo/images/swirl1.jpg');
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	//	Our background
	this.game.add.image(0, 0, 'back');

	//	This is the BitmapData we're going to be drawing to
	this.bmd = this.game.add.bitmapData( this.game.width, this.game.height );

	//	Black and opaque
	this.bmd.fill(0, 0, 0, 1);

	this.bmd.addToWorld();

	//	Our text object
    this.text = this.game.make.text(0, 0, "phaser", { font: "bold 32px Arial", fill: "#ff0044" });
    this.text.anchor.set(0.5);

    this.game.add.tween( this.text.scale ).to( { x: 0.5, y: 0.5 }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	this.bmd.fill(0, 0, 0, 0.05);

	this.bmd.draw( this.text, this.game.world.randomX, this.game.world.randomY, null, null, 'destination-out');
};

/*
* render the view as per the requirements
*/
function render() {

};
}());
