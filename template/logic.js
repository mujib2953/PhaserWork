/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 17:27:29
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
	console.log( '%c Assets preloaded. ', 'background: black; color: white' );
};

function create() {
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};