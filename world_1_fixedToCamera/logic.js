/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 19:33:34
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

	this.game.stage.backgroundColor = '#007236';

	this.game.load.image( 'mushroom', '../repo/images/mushroom2.png' );
	this.game.load.image( 'sonic', '../repo/images/sonic_havok_sanity.png' );
	this.game.load.image( 'phaser', '../repo/images/phaser1.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.world.setBounds( -1000, -1000, 2000, 2000 );

	for( var i = 0; i < 200; i++ ) {
		this.game.add.sprite( this.game.world.randomX, this.game.world.randomY, 'mushroom');
	}


	this.game.add.text( 0, 0, "this text scrolls\nwith the background", { font: "32px Arial", fill: "#f26c4f", align: "center" });

	this.logo1 = this.game.add.sprite(0, 0, 'phaser');
    this.logo1.fixedToCamera = true;
    this.logo1.cameraOffset.setTo(100, 100);


    this.logo2 = this.game.add.sprite(0, 0, 'phaser');
    this.logo2.fixedToCamera = true;
    this.logo2.cameraOffset.setTo(500, 100);


    var t = this.game.add.text(0, 0, "this text is fixed to the camera", { font: "32px Arial", fill: "#ffffff", align: "center" });
    t.fixedToCamera = true;
    t.cameraOffset.setTo(200, 500);


    this.game.add.tween( this.logo2.cameraOffset ).to( { y: 400 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);

    this.cursors = this.game.input.keyboard.createCursorKeys();
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	if ( this.cursors.up.isDown ) {
        this.game.camera.y -= 4;
    } else if ( this.cursors.down.isDown ) {
        this.game.camera.y += 4;
    }

    if ( this.cursors.left.isDown ) {
        this.game.camera.x -= 4;
    } else if ( this.cursors.right.isDown ) {
        this.game.camera.x += 4;
    }
};

/*
* render the view as per the requirements
*/
function render() {
	this.game.debug.cameraInfo( this.game.camera, 32, 32);
};
}());
