/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 15:13:03
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

	this.game.load.atlas( 'atlas', '../repo/anim/atlas/atlas_hash_trim.png', '../repo/anim/atlas/atlas_json_hash_trim.json' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.backgroundColor = '#2D2D8D';

	this.bmd = this.game.add.bitmapData( 800, 600 );
	this.bmd.addToWorld( 8, 8 );

	this.sprite = this.game.add.sprite( 100, 64, 'atlas', 'contra3' );
	this.sprite.tint = 0;

	this.bmd.draw( this.sprite );

	this.sprite.tint = 0xFFFFFF;
	
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