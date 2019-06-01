// Display a character string with a decorative frame.
'use strict';

import { Display } from './display';
import { MessageDisplay } from './message-display';
import { SideFrame } from './side-frame';
import { FullFrame } from './full-frame';

const displayA: Display = new MessageDisplay('Nice to meet you.');
displayA.show();

const displayB: Display = new SideFrame(displayA, '!');
displayB.show();

const displayC: Display = new FullFrame(displayB);
displayC.show();

const displayD: Display = new SideFrame(
    new FullFrame(
        new FullFrame(
            new SideFrame(
                new SideFrame(
                    new FullFrame(
                        new MessageDisplay('See you again.')
                    ),
                    '#'
                ),
                '#'
            )
        )
    ),
    '#'
);
displayD.show();
