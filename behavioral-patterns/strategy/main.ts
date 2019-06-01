/*
A game of rock-scissors-paper.
There are two strategies below.

* When winning a game, show the same hand at the next time.
* Calculate a hand from the previous hand stochastically.
*/
'use strict';

import { Player } from './player';
import { StrategyA } from './strategy-a';
import { StrategyB } from './strategy-b';

const player1 = new Player('Emily', new StrategyA());
const player2 = new Player('James', new StrategyB());

for (let i = 0; i < 100; i++) {
    const nextHand1 = player1.nextHand();
    const nextHand2 = player2.nextHand();
    if (nextHand1.isStrongerThan(nextHand2)) {
        console.log('Winner: ' + player1.toString());
        player1.won();
        player2.lost();
    }
    else if (nextHand2.isStrongerThan(nextHand1)) {
        console.log('Winner: ' + player2.toString());
        player1.lost();
        player2.won();
    }
    else {
        console.log('Draw...');
        player1.drew();
        player2.drew();        
    }
    console.log('RESULT:');
    console.log(player1.toString());
    console.log(player2.toString());
}
