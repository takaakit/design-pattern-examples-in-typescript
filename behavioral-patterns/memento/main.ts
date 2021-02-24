/*
A dice game in which money increases and decreases:
* A gamer shakes a dice and the number determine the next state.
* If the number of dice is even, gamer's money doubles, and if it is odd, gamer's money is halved.
* If the gamer's money is less than half of the highest amount, it returns to the highest amount.
* The game is repeated.
 */
'use strict';

import { Gamer } from './gamer';
import { Memento } from './memento';
import * as sleep from 'sleep';

const gamer: Gamer = new Gamer(100);            // The initial money is 100
let memento: Memento = gamer.createMemento();   // Save the initial state

for (let i = 0; i < 10; i++) {
    console.log('==== Turn ' + (i + 1));        // Display count

    gamer.play();                               // Play a game

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

    sleep.sleep(1);
}
