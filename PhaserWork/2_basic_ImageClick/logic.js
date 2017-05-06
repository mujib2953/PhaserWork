/*
* @Author: Mujib Ansari
* @Date:   2017-05-06 17:01:53
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-05-06 17:40:53
*/

'use strict';
var oScope = {
	nCount: 0
};

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

	var centX = this.game.world.centerX,
		centY = this.game.world.centerY;

	this.SP_einstein = this.game.add.sprite( centX, centY, 'einstein_img' );
	
	//  Moves the image anchor to the middle, so it centers inside the game properly
    this.SP_einstein.anchor.set(0.5);

	//--- Enable inputs actions
	this.SP_einstein.inputEnabled = true; 
    addText.call( this );

    // --- on click event
    this.SP_einstein.events.onInputDown.add( onStageClick, this );
	console.log( '%c Component Creation Completed. ', 'background: black; color: white' );	
};

/*
* Will added the text to canvas
*/
function addText() {

	this.ost_1 = this.game.add.text( 250, 60, '', { fill: '#FFF' } );
};

/*
* Stage click listener
*/
function onStageClick() {
	
	// console.log( '%c Stage clicked. ', 'background: black; color: white' );	
	oScope.nCount++;
	this.ost_1.text = 'You have clicked ' + oScope.nCount + ' times!';
};