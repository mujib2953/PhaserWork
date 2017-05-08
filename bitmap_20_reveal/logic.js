/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 13:51:37
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

	this.game.load.image( 'pic_1', '../repo/images/cougar-face_of_nature.png' );
	this.game.load.image( 'pic_2', '../repo/images/cougar_sanity_train.png' );
	this.game.load.image( 'pic_3', '../repo/images/questar.png' );
	this.game.load.image( 'pic_4', '../repo/images/slayer-sorry_im_the_beast.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.stage.smoothed = false;

	this.bmd = this.game.make.bitmapData( 320, 256 );
	this.bmd.addToWorld( this.game.world.centerX, this.game.world.centerY, 0.5, 0.5, 2, 2 );

	this.picIndex = 1;
	this.pixelArray = [];

	// --- creating the pixel Array
	for( var i = 0; i < 256; i++ ) {
		for( var j = 0; j < 320; j++ ) {

			this.pixelArray.push( [ i, j ] );
		}
	}

	this.tempArray = this.pixelArray.slice( 0 );

	Phaser.ArrayUtils.shuffle( this.tempArray );

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	for( var i = 0; i < 128; i++ ) {

		if( this.tempArray.length > 0 ) {

			var xy = this.tempArray.pop();

			this.bmd.copy( 'pic_' + this.picIndex, xy[ 0 ], xy[ 1 ], 1, 1  );

		} else {

			this.tempArray = this.pixelArray.slice( 0 );
			Phaser.ArrayUtils.shuffle( this.tempArray );

			this.picIndex++;

			if( this.picIndex == 5 )
				this.picIndex = 1;
		}

	}

};

/*
* render the view as per the requirements
*/
function render() {

};
}());
