/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 18:57:33
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

	this.game.load.spritesheet( 'buttons', '../repo/spritesheets/number-buttons-90x90.png', 90, 90 );
	this.game.load.image( 'bg', '../repo/images/starfield.jpg' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.backgroundColor = '#182d3b';

	this.button = this.game.add.button( this.game.world.centerX, this.game.world.centerY, 'buttons', actionOnClick, this, 1, 0, 2);

	this.button.anchor.setTo(0.5, 0.5);

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

function actionOnClick () {
    
    //  Manually changing the frames of the button, i.e, how it will look when you play with it
    this.button.setFrames(4, 3, 5);

}
}());
