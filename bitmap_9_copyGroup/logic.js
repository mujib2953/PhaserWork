/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-07 16:50:33
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

	this.game.load.image( 'bg', '../repo/images/undersea.jpg' );
	this.game.load.image( 'disk', '../repo/images/copy-that-floppy.png' );
	this.game.load.image( 'squad', '../repo/images/bsquadron3.png' );
	this.game.load.image( 'loop', '../repo/images/beball1.png' );

	this.game.load.bitmapFont( 'desyrel', '../repo/fonts/bitmapFonts/desyrel.png', '../repo/fonts/bitmapFonts/desyrel.xml' );

	this.game.load.spritesheet( 'mummy', '../repo/spritesheets/metalslug_mummy37x45.png', 37, 45, 18 );

	this.game.load.atlasJSONHash( 'bot', '../repo/anim/bot/running_bot.png', '../repo/anim/bot/running_bot.json' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.group = this.game.make.group();

	this.group.create( 0, 0, 'bg' );

	for( var i = 0; i < 16; i++ ) {

		var rndX = this.game.world.randomX,
			rndY = this.game.world.randomY,
			sprite;

		sprite = this.group.create( rndX, rndY, 'loop' );

		if( i % 2 == 1 ) {
			sprite.tint = 0xFF00FF;
		}

	}

	// --- Text
	this.ost_bmt = this.game.make.bitmapText( 32, 64, 'desyrel', 'Hello World!' );
	this.ost_bmt.angle = 10;

	this.group.add( this.ost_bmt );

	// ---- Disk and Squad
	var diskImg = this.group.create( 250, 300, 'disk' );
	var sqaudImg = this.game.make.sprite( 32, 16, 'squad' );

	diskImg.addChild( sqaudImg );

	sqaudImg.angle = 45;
	diskImg.scale.x = -1;
	diskImg.angle = -20;

	// --- Mummy
	var mummy = this.group.create( 600, 4, 'mummy', 8 );
	mummy.scale.set( 4 );
	mummy.smoothed = false;

	var bot = this.group.create(60, 200, 'bot');
    bot.scale.set(2);


    //  This is the BitmapData we're going to be drawing to
    var bmd = this.game.add.bitmapData( this.game.width, this.game.height );

    var bmdContainer = bmd.addToWorld(390, 290, 0, 0, 0.5, 0.5);

    this.game.stage.updateTransform();

    //  Draw the group to the BitmapData
    // bmd.drawGroup(group);
    bmd.drawGroup( this.game.world );

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