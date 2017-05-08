/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 12:04:45
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

	this.game.load.image( 'wheel', '../repo/images/color_wheel_swirl.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.bmd = this.game.make.bitmapData( this.game.width, this.game.height );
	this.bmd.draw( 'wheel', -200, -100 );
	this.bmd.update();
	this.bmd.addToWorld();


	this.toolTip = this.game.make.bitmapData( 64, 64 );
	this.sp_toolTip = this.game.add.sprite( 0, 0, this.toolTip );

	this.game.input.addMoveCallback( updateTooltip, this );

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

function updateTooltip( pointer, x, y ) {

	if( x >= 0 && x <= this.bmd.width && y >= 0 && y <= this.bmd.height ) {

		var color = this.bmd.getPixelRGB( x, y );

		this.toolTip.fill( 0, 0, 0 );
		this.toolTip.rect( 1, 1, 62, 62, color.rgba );

		this.sp_toolTip.x = x;
		this.sp_toolTip.y = y;
	}
};