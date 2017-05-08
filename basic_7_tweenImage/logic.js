/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 19:25:50
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
	
	this.game.forceSingleUpdate = true;
	this.game.load.image( 'einstein', '../repo/images/ra_einstein.png');
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	var sprite = this.game.add.sprite(-400, 0, 'einstein');

    //  Here we create a tween on the sprite created above
    var tween = this.game.add.tween(sprite);

    //  The object defines the properties to tween.
    //  In this case it will move to x 800
    //  The 5000 is the duration in ms - 5000ms = 5 seconds
    tween.to({ x: 800 }, 5000, 'Bounce', true, 0);
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