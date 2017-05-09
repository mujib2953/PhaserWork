/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   mujibur
* @Last Modified time: 2017-05-09 12:34:57
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
	this.game = new Phaser.Game( 800, 600, Phaser.WEBGL, 'phaser-example', {
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

	this.game.load.image( 'sky', '../repo/images/deepblue.png' );

	this.game.load.image( 'dragonTexture', '../repo/creature/dragon.png' );
	this.game.load.json( 'dragonMesh', '../repo/creature/dragon.json' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};
/*
* Create the components used in the game
*/
function create() {

	this.game.add.image( 0, 0, 'sky' );

	// this.dragon = this.game.add.creature(450, 350, 'dragonTexture', 'dragonMesh');

	this.dragon = this.game.add.creature(450, 350, 'dragonTexture', 'dragonMesh');

    this.dragon.scale.set(25.0);
    
    this.dragon.play(true); //  true = loop

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
}());
