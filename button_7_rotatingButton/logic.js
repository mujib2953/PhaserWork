/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 19:12:07
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

	this.game.load.spritesheet( 'button', '../repo/spritesheets/button_sprite_sheet.png', 193, 71 );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.backgroundColor = '#CCCCCC';

	this.button = this.game.add.button( this.game.world.centerX, this.game.world.centerY, 'button', onClicked, this, 2, 1, 0 );

	this.button.anchor.set( 0.5 );

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	this.button.angle += 1;
};

/*
* render the view as per the requirements
*/
function render() {

};

function onClicked() {};
}());
