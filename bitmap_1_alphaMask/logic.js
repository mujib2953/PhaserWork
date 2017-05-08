/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 23:24:03
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
	this.game = new Phaser.Game( 800, 600, Phaser.AUTO, 'phaser-example', {
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

	this.game.load.image( 'pick', '../repo/images/questar.png' );
	this.game.load.image( 'mask', '../repo/images/mask-test2.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {
	
	var style = { font: "16px Arial", fill: '#FFF' };

	this.game.stage.backgroundColor = 0x4D4D4D;

	this.game.add.text( 64, 10, 'Source image', style );
	this.game.add.image( 64, 32, 'pick' );

	this.game.add.text( 400, 10, 'Alpha Mask', style );
	this.game.add.image( 400, 32, 'mask' );

	//	Create a new bitmap data the same size as our picture
	var bmd = this.game.make.bitmapData(320, 256);

	//	And create an alpha mask image by combining pic and mask from the cache
	bmd.alphaMask('pick', 'mask');

	this.game.add.image( this.game.world.centerX, 320, bmd ).anchor.set( 0.5, 0 );

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