/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 17:31:56
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
	this.game.load.image( 'ball', '../repo/images/shinyball.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.bmd = this.game.add.bitmapData( 32, 74 );

	for( var i = 0; i < 100; i++ ) {
		this.game.add.sprite( this.game.world.randomX, this.game.world.randomY, this.bmd );
	}
	this.waveSize = 0;
	this.wavePixelChunk = 2;
	this.waveData = this.game.math.sinCosGenerator( 32, 8, 8, 2 );

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	this.bmd.cls();

	updateWooblyBall.call( this );
};

/*
* render the view as per the requirements
*/
function render() {

};

function updateWooblyBall() {

	var s = 0;
	var copyRect = { x: 0, y: 0, w: this.wavePixelChunk, h: 32 };
	var copyPoint = { x: 0, y: 0 };

	for (var x = 0; x < 32; x += this.wavePixelChunk)
	{
		copyPoint.x = x;
		copyPoint.y = this.waveSize + ( this.waveSize / 2 ) + this.waveData.sin[s];

		this.bmd.context.drawImage( this.game.cache.getImage('ball'), copyRect.x, copyRect.y, copyRect.w, copyRect.h, copyPoint.x, copyPoint.y, copyRect.w, copyRect.h);
			
		copyRect.x += this.wavePixelChunk;
			
		s++;
	}
	this.bmd.render();

	//	Cycle through the wave data - this is what causes the image to "undulate"
	Phaser.ArrayUtils.rotate( this.waveData.sin );

	this.waveDataCounter++;
	
	if ( this.waveDataCounter === this.waveData.length ) {
		this.waveDataCounter = 0;
	}
};
}());
