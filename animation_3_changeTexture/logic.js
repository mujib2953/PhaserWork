/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-09 11:46:30
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

	this.game.load.atlasJSONHash( 'bot', '../repo/anim/bot/running_bot.png', '../repo/anim/bot/running_bot.json' );
	this.game.load.spritesheet( 'mummy', '../repo/spritesheets/metalslug_mummy37x45.png', 37, 45, 18 );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.character = this.game.add.sprite( 100, 200, 'bot' );

	this.character.animations.add( 'run' );
	this.character.animations.play( 'run', 15, true );
	this.character.x = 800;


	this.game.input.onDown.add( changeTexture, this );
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	this.character.x -= 0.9;
};

/*
* render the view as per the requirements
*/
function render() {

};

function changeTexture() {
	this.character.loadTexture( 'mummy', 0 );
	this.character.animations.add( 'walk' );
	this.character.animations.play( 'walk', 30, true );
};
}());
