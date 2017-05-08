/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 12:38:43
*/

'use strict';
var oScope = {
	data: { res: 6, pow: 10000, angle: 0.1, height: 6 }
};

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

	this.game.load.image( 'star', '../repo/images/chunk.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.star = this.game.make.sprite( 0, 0, 'star' );

	this.texture_1 = this.game.add.renderTexture( 800, 600, 'texture_1' );

	this.game.add.sprite( 0, 0 , this.texture_1 );

	this.game.add.tween( oScope.data ).to( { height: 12 }, 3000, "Sine.easeInOut", true, 4000, -1, true);
    this.game.add.tween( oScope.data ).to( { angle: 1.0 }, 4000, "Linear", true, 0, -1, true);

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	plot.call( this );
};

/*
* render the view as per the requirements
*/
function render() {

};

function plot() {

	this.texture_1.clear();

	for( var x = -100; x <= 100; x += 2 ) {

		var v = oScope.data.res * Math.floor( Math.sqrt( ( oScope.data.pow ) - x * x ) / oScope.data.res );

		for( var y = v; y > -v; y -= oScope.data.res ) {

			var z = ( 32 * Math.sin( Math.sqrt( x * x + y * y ) / oScope.data.height ) ) + oScope.data.angle * y;

			var drawX = 400 + Math.floor( x * 3 );
			var drawY = 300 + Math.floor( z * 2 );

			this.texture_1.renderRawXY( this.star, drawX, drawY, false );

		}
	}
}