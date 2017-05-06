/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 23:40:39
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
	
	this.game.load.atlas( 'seaCreature', '../repo/anim/atlas/seacreatures_json.png', '../repo/anim/atlas/seacreatures_json.json' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.bitmap = this.game.make.bitmapData( 800, 600 );
	this.game.add.image( 0, 0, this.bitmap );

	this.jellyFish = this.add.sprite( 0, 0, 'seaCreature', 'blueJellyfish0010' );
	this.jellyFish.animations.add( 'swim', Phaser.Animation.generateFrameNames( 'blueJellyfish', 0, 32, '', 4 ), 30, true );

	this.jellyFish.animations.play( 'swim' );

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	if( this.game.input.activePointer.isDown ) {
		this.bitmap.draw( this.jellyFish, this.input.activePointer.position.x, this.input.activePointer.position.y );
	}

};

/*
* render the view as per the requirements
*/
function render() {

};