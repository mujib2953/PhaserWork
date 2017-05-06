/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 00:08:48
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
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {
	
	this.game.stage.backgroundColor = '#003663';

	// --- create Bitmap
	this.bmd = this.game.add.bitmapData( 32, 32 );

	// --- Gradient
	this.grd = this.bmd.context.createLinearGradient( 0, 0, 0, 32 );

	this.grd.addColorStop( 0, '#8ED6FF' );
	this.grd.addColorStop( 1, '#004CB3' );

	this.bmd.context.fillStyle = this.grd;
	this.bmd.context.fillRect( 0, 0, 32, 32 );

	// --- Caching the date
	this.game.cache.addBitmapData( 'blueShade', this.bmd );

	// --- Adding Physics
	this.game.physics.startSystem( Phaser.Physics.ARCADE );

	this.game.add.sprite( 8, 8, this.game.cache.getBitmapData( 'blueShade' ) );

	// --- Moving blocks
	addMovingBlocks.call( this );

	this.game.time.events.repeat( Phaser.Timer.SECONDS, 20, addMovingBlocks.bind( this ), this );

	this.game.input.onDown.add( updateBitMapDataTexture, this );

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
	this.game.debug.text('Click to regenerate the texture', 48, 30);
};

/*
* The blocks which are moving
*/
function addMovingBlocks() {

	for( var i = 0; i <= 4; i++ ) {
		var sprite = this.game.add.sprite( this.game.world.randomX, this.game.world.randomY, this.game.cache.getBitmapData( 'blueShade' ) );

		this.game.physics.arcade.enable( sprite );

		sprite.body.collideWorldBounds = true;
		sprite.body.bounce.set( 1 );

		sprite.body.velocity.x = this.game.rnd.realInRange( -200, 200 );
		sprite.body.velocity.y = this.game.rnd.realInRange( -200, 200 );
	}
		

};

/*
* On click update the colors
*/
function updateBitMapDataTexture() {

	var bmd = this.game.cache.getBitmapData( 'blueShade' );

	//	Modify it slightly. This has a direct result, because it's a reference to the cached object we don't need to write it back to the cache again

    var grd = bmd.context.createLinearGradient( 0, 0, 0, 32 );

    grd.addColorStop( 0, generateHexColor() );
    grd.addColorStop( 1, generateHexColor() );
    bmd.context.fillStyle = grd;
    bmd.context.fillRect( 0, 0, 32, 32 );

    //	All sprites using this texture will update at the next render
    bmd.dirty = true;

};

function generateHexColor() { 
	return '#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16);
}