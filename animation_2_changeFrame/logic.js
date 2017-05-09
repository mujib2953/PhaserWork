/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-09 11:12:27
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

	this.game.load.atlas( 'seacreatures', '../repo/anim/atlas/seacreatures_json.png', '../repo/anim/atlas/seacreatures_json.json' );
	this.game.load.image('undersea', '../repo/images/undersea.jpg');
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {
	
	this.game.add.image( 0, 0, 'undersea' );

	this.greenJellyfish = this.game.add.sprite( 330, 100, 'seacreatures', 'greenJellyfish0000' );
	this.game.input.onDown.add( changeFrame, this );

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

function changeFrame() {

	this.greenJellyfish.frameName = 'greenJellyfish0010';
};
}());
