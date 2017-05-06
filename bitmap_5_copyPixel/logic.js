/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 01:19:50
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

	this.game.load.image( 'pic', '../repo/images/hotshot-chaos_in_tokyo.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.background = '#2D2D2D';

	this.bmd = this.game.make.bitmapData( 800, 600 );
	this.bmd.addToWorld();

	this.area = new Phaser.Rectangle( 0, 300, 200, 16 );

	this.bmd.copyRect( 'pic', this.area, 300, 0 );

	this.dropTime = 0;

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	if( this.area.y > 0 && this.game.time.now > this.dropTime ) {

		for( var i = 0; i < this.area.y; i++ ) {
			this.bmd.copyRect( 'pic', this.area, 300, i );
		}

		this.area.y--;
		this.dropTime = this.game.time.now + 25;
	}

};

/*
* render the view as per the requirements
*/
function render() {

};