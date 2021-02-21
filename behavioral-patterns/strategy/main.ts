/*
A game of rock-scissors-paper.
There are two strategies below.

* When winning a game, show the same hand at the next time.
* Calculate a hand from the previous hand stochastically.
*/
'use strict';

import { Player } from './player';
import { RandomStrategy } from './random-strategy';
import { MirrorStrategy } from './mirror-strategy';
import { GameResultType } from './game-result-type';

const player1 = new Player('Emily', new RandomStrategy());
const player2 = new Player('James', new MirrorStrategy());

for (let i = 0; i < 100; i++) {
    const handOfPlayer1 = player1.showHandSignal();
    const handOfPlayer2 = player2.showHandSignal();
    var resultOfPlayer1: GameResultType;
    var resultOfPlayer2: GameResultType;
    if (handOfPlayer1.isStrongerThan(handOfPlayer2)) {
        console.log('Winner: ' + player1.toString());
        resultOfPlayer1 = GameResultType.Win;
        resultOfPlayer2 = GameResultType.Loss;
    }
    else if (handOfPlayer2.isStrongerThan(handOfPlayer1)) {
        console.log('Winner: ' + player2.toString());
        resultOfPlayer1 = GameResultType.Loss;
        resultOfPlayer2 = GameResultType.Win;
    }
    else {
        console.log('Draw...');
        resultOfPlayer1 = GameResultType.Draw;
        resultOfPlayer2 = GameResultType.Draw;
    }
    player1.notifyGameResult(resultOfPlayer1, handOfPlayer1, handOfPlayer2);
    player2.notifyGameResult(resultOfPlayer2, handOfPlayer2, handOfPlayer1);
}
console.log('RESULT:');
console.log(player1.toString());
console.log(player2.toString());
