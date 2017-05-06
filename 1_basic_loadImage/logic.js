/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 17:25:28
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
		create: create
	} );
};

/*
* Preload the assests
*/
function preload() {
	this.game.load.image( 'einstein_img', '../repo/images/ra_einstein.png' );
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};

function create() {
	this.SP_einstein = this.game.add.sprite( 80, 0, 'einstein_img' );
	this.SP_einstein.rotation = 0.14;
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};