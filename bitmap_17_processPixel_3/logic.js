/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 13:02:45
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
	this.game.load.image( 'crystal', '../repo/images/cougar_dragonsun.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.bmd = this.game.make.bitmapData();

	this.bmd.load( 'crystal' );

	this.bmd.addToWorld( this.game.world.centerX, this.game.world.centerY, 0.5, 0.5 );

	this.game.input.onDown.add( stratproces, this );
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

function stratproces() {

	this.bmd.processPixelRGB( forEachPixel, this );
};

function forEachPixel( pixel ) {

	//  The incoming pixel values
    var r = pixel.r;
    var g = pixel.g;
    var b = pixel.b;

    //  And let's mix them up a bit
    pixel.r = 255 - r;
    pixel.g = 255 - g;
    pixel.b = 255 - b;

    return pixel;
    
};