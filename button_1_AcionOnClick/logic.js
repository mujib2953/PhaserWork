/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 17:46:07
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
	this.game.load.image( 'bg', '../repo/images/starfield.jpg' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.backgroundColor = '#182D3B';

	this.background = this.game.add.tileSprite( 0, 0, 800, 600, 'bg' );

	this.button = this.game.add.button( this.game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0 );

	this.button.onInputOver.add( over, this );
	this.button.onInputOut.add( out, this );
	this.button.onInputUp.add( up, this );

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

function actionOnClick() {
	console.log( 'Button is clicked' );
	this.background.visible = !this.background.visible;
};

function over() {
	console.log( 'on button is over' );
};

function out() {
	console.log( 'on button is out' );
};

function up() {
	console.log( 'on button is up' );
};

}());
