/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 18:52:03
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

	this.game.load.atlas( 'button', '../repo/anim/atlas/button_texture_atlas.png', '../repo/anim/atlas/button_texture_atlas.json' );
	this.game.load.image( 'bg', '../repo/images/starfield.jpg' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.backgroundColor = '#182d3b';
	
	this.background = this.game.add.tileSprite( 0, 0, 800, 600, 'bg' );

	this.button = this.game.add.button( this.game.world.centerX - 95, 400, 'button', actionOnClick, this, 'over', 'out', 'down');

	this.button.onInputOver.add( over, this );
    this.button.onInputOut.add( out, this );

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

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    this.background.visible = !this.background.visible;

}
}());
