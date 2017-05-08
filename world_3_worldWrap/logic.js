/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 19:59:29
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

	this.game.load.image( 'backdrop', '../repo/images/remember-me.jpg');
    this.game.load.image( 'card', '../repo/images/mana_card.png');

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.world.setBounds( 0, 0, 1920, 1200 );

    this.game.add.sprite( 0, 0, 'backdrop' );

    this.card = this.game.add.sprite( 200, 200, 'card' );

    this.game.camera.follow( this.card );

    this.cursors = this.game.input.keyboard.createCursorKeys();
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {

	if ( this.cursors.left.isDown )
        this.card.x -= 4;
	else if ( this.cursors.right.isDown )
        this.card.x += 4;


    if ( this.cursors.up.isDown )
        this.card.y -= 4;
    else if ( this.cursors.down.isDown )
        this.card.y += 4;

    this.game.world.wrap( this.card, 0, true );
};

/*
* render the view as per the requirements
*/
function render() {

};
}());
