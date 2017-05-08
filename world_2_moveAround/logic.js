/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 19:48:49
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

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.world.resize( 3000, 900 );

	for (var i = 0; i < 100; i++) {
        this.game.add.sprite( this.game.world.randomX, this.game.world.randomY, 'mushroom');
    }

    this.game.add.text( 600, 800, "- phaser -", { font: "32px Arial", fill: "#330088", align: "center" });


    var g = this.game.add.group();
    g.x = 500;

    this.d = g.create(100, 300, 'sonic');
    this.d.anchor.setTo(0.5, 0.5);


    this.cursors = this.game.input.keyboard.createCursorKeys();
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	this.d.angle += 1;

	if ( this.cursors.up.isDown ) {
		if ( this.cursors.up.shiftKey )
			this.d.angle++;
		else
			this.game.camera.y -= 4;
	} else if ( this.cursors.down.isDown ) {
		if ( this.cursors.down.shiftKey )
			this.d.angle--;
		else
			this.game.camera.y += 4;
	}

    if ( this.cursors.left.isDown ) {
        if ( this.cursors.left.shiftKey )
            this.game.world.rotation -= 0.05;
        else
            this.game.camera.x -= 4;
    } else if ( this.cursors.right.isDown ) {
        if ( this.cursors.right.shiftKey )
            this.game.world.rotation += 0.05;
        else
            this.game.camera.x += 4;
    }

};

/*
* render the view as per the requirements
*/
function render() {

};
}());
