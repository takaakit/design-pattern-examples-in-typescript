/*
Dice game collecting fruits.

* A gamer shakes a dice and the number determine the next state.
* Gamer's money increases or decreases depending on the number. The gamer sometimes gets desserts.
* The game is over if the gamer's money runs out.
*/
'use strict';

import { Gamer } from './gamer';
import { Memento } from './memento';

const gamer: Gamer = new Gamer(100);				// The initial money is 100
var memento: Memento = gamer.createMemento();	// Save the initial state
var loopCount: number = 0;

let id = setInterval(() => {
	console.log('==== ' + loopCount);					// Display count
	console.log('Current state: ' + gamer.toString());	// Display the current state of the gamer

	gamer.play();										// Play a game

	console.log('Gamer\'s money is ' + gamer.money + '.');

	// Determine the behavior of the Memento
	if (gamer.money > memento.money) {
		console.log('(Save the current state because money has increased.)');
		memento = gamer.createMemento();
	}
	else if (gamer.money < memento.money / 2) {
		console.log('(Go back to the previous state because money has decreased.)');
		gamer.restoreMemento(memento);
	}
	console.log('');

	loopCount++;
	if (loopCount >= 100) {
		clearInterval(id);
	}

}, 1000);
