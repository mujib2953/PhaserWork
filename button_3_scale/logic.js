/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-08 18:32:26
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

	this.game.load.spritesheet( 'button', '../repo/spritesheets/button_sprite_sheet.png', 193, 71 );

	this.game.load.image( 'sky_0', '../repo/images/space2.png' );
	this.game.load.image( 'sky_1', '../repo/images/cavern1.png' );
	this.game.load.image( 'sky_2', '../repo/images/chrome.png' );
	this.game.load.image( 'sky_3', '../repo/images/fire.png' );
	this.game.load.image( 'sky_4', '../repo/images/fog.png' );
	this.game.load.image( 'sky_5', '../repo/images/sky1.png' );
	this.game.load.image( 'sky_6', '../repo/images/toxic.png' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.background = this.game.add.sprite(0, 0, 'sky_0');
    this.background.name = 'background';

    //  Standard button (also used as our pointer tracker)
    this.button1 = this.game.add.button(100, 100, 'button', changeSky, this, 2, 1, 0);
    this.button1.name = 'sky_1';
    this.button1.anchor.setTo(0.5, 0.5);

    //  Rotated button
    this.button2 = this.game.add.button(330, 200, 'button', changeSky, this, 2, 1, 0);
    this.button2.name = 'sky_2';
    this.button2.angle = 24;
    this.button2.anchor.setTo(0.5, 0.5);

    //  Width scaled button
    this.button3 = this.game.add.button(100, 300, 'button', changeSky, this, 2, 1, 0);
    this.button3.name = 'sky_3';
    this.button3.width = 300;
    this.button3.anchor.setTo(0, 0.5);
    // button3.angle = 0.1;

    //  Scaled button
    this.button4 = this.game.add.button(300, 450, 'button', changeSky, this, 2, 1, 0);
    this.button4.name = 'sky_4';
    this.button4.scale.setTo(2, 2);

    //  Shrunk button
    this.button5 = this.game.add.button(100, 450, 'button', changeSky, this, 2, 1, 0);
    this.button5.name = 'sky_5';
    this.button5.scale.setTo(0.5, 0.5);

    //  Scaled and Rotated button
    this.button6 = this.game.add.button(570, 200, 'button', changeSky, this, 2, 1, 0); // anchor 0.5
    this.button6.name = 'sky_6';
    this.button6.angle = 32;
    this.button6.scale.setTo(2, 2);
    this.button6.anchor.setTo(0.5, 0.5);
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

function changeSky (button) {

    this.background.loadTexture( button.name );

}
}());
