/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-09 11:04:49
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

	this.game.load.image( 'bg', '../repo/images/thorn_lazur.png' );
	this.game.load.spritesheet( 'mummy', '../repo/spritesheets/metalslug_mummy37x45.png', 37, 45, 18 );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.background = this.game.add.image( 0, -400, 'bg' );
	this.background.scale.set( 2 );
	this.background.smoothed = false;


	this.mummy = this.game.add.sprite( 200, 360, 'mummy' );
	this.mummy.scale.set( 4 );
	this.mummy.smoothed = false;

	this.anim = this.mummy.animations.add( 'walk' );


	this.anim.onStart.add( animationStarted, this );
    this.anim.onLoop.add( animationLooped, this );
    this.anim.onComplete.add( animationStopped, this );

    this.anim.play(10, true);

	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Update the view of the game
*/
function update() {
	if ( this.anim.isPlaying) {
        this.background.x -= 1;
    }
};

/*
* render the view as per the requirements
*/
function render() {

};

function animationStarted( sprite, animation ) {
	this.game.add.text(32, 32, 'Animation started', { fill: 'white' });
};

function animationLooped( sprite, animation ) {
	if (animation.loopCount === 1) {
		this.loopText = this.game.add.text(32, 64, 'Animation looped', { fill: 'white' });
	} else {
		this.loopText.text = 'Animation looped x2';
        animation.loop = false;
	}
};

function animationStopped( sprite, animation ) {
	this.game.add.text(32, 64+32, 'Animation stopped', { fill: 'white' });
};
}());
