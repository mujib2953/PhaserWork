/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 16:00:42
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

	this.game.load.image( 'bg', '../repo/images/undersea.jpg' );
	this.game.load.image( 'loop', '../repo/images/beball1.png' );

	this.game.load.bitmapFont( 'desyrel', '../repo/fonts/bitmapFonts/desyrel.png', '../repo/fonts/bitmapFonts/desyrel.xml' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.group = this.game.make.group();

	this.group.create( 0, 0, 'bg' );

	// --- Adding bunch of sprite to the group at random position
	for( var i = 0; i < 16; i++ ) {
		this.group.create( this.game.world.randomX, this.game.world.randomY, 'loop' );
	}

	this.bmpText = this.game.make.bitmapText( 32, 64, 'desyrel', 'Hello World!' );
	this.group.add( this.bmpText );


	// --------- small version
	this.bmd = this.game.add.bitmapData( this.game.width, this.game.height );
	this.bmpContainer = this.bmd.addToWorld( 390, 290, 0, 0, 0.5, 0.5 );

	this.game.stage.updateTransform();

	this.bmd.drawFull( this.game.world );

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