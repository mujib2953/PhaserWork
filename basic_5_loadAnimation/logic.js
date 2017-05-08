/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 18:50:02
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

	// --- loading the Animation from JSON
	this.game.load.atlasJSONHash( 'robo', '../repo/anim/bot/running_bot.png', '../repo/anim/bot/running_bot.json' );

	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {
	
	this.Anim_Robo = this.game.add.sprite( 200 ,200, 'robo' );

	this.Anim_Robo.animations.add( 'run' );

	//  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
	this.Anim_Robo.animations.play( 'run', 15, true );

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