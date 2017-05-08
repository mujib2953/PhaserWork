/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 14:18:03
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

	this.game.load.image( 'pic', '../repo/images/questar.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.bmd = this.game.make.bitmapData( 320, 256 );

	this.bmd.copy( 'pic' );

	//  Draw a few random shapes to it
    this.bmd.circle(100, 100, 32, 'rgba(255,0,0,0.8)');
    this.bmd.rect(110, 40, 64, 120, 'rgba(255,0,255,0.8)');


	this.sprite = this.game.add.sprite( 300, 300, this.bmd );
	this.sprite.anchor.set( 0.5 );

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	this.sprite.rotation += 0.01;
};

/*
* render the view as per the requirements
*/
function render() {

};
}());
