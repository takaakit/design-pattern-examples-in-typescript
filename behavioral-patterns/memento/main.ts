/*
Dice game collecting fruits.

* A gamer shakes a dice and the number determine the next state.
* Gamer's money increases or decreases depending on the number. The gamer sometimes gets desserts.
* The game is over if the gamer's money runs out.
*/
'use strict';

import { Gamer } from './gamer';
import { Memento } from './memento';

const gamer: Gamer = new Gamer(100);			// The initial money is 100
var memento: Memento = gamer.createMemento();	// Save the initial state
var loopCount: number = 0;

let id = setInterval(() => {
	console.log('==== Turn ' + loopCount);		// Display count

	gamer.play();								// Play a game

	// Determine the behavior of the Memento
	if (gamer.money > memento.money) {
		console.log('(Gamers\' money is the highest ever, so record the current state.)');
		memento = gamer.createMemento();
	}
	else if (gamer.money < memento.money / 2) {
		console.log('(Gamer\'s money is less than half of the highest amount, so return to the recorded state.)');
		gamer.setMemento(memento);
		console.log('Gamer\'s money returns to ' + gamer.money + '.');
	}
	console.log('');

	loopCount++;
	if (loopCount >= 10) {
		clearInterval(id);
	}

}, 1000);
