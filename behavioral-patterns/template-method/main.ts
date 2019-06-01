// Display the character and string repeatedly 5 times.
'use strict';

import { AbstractDisplay } from './abstract-display';
import { CharDisplay } from './char-display';
import { StringDisplay } from './string-display';

const display1: AbstractDisplay = new CharDisplay('H');                   // Create an instance of the CharDisplay
const display2: AbstractDisplay = new StringDisplay('Hello world.');      // Create an instance of the StringDisplay
const display3: AbstractDisplay = new StringDisplay('Nice to meet you.'); // Create an instance of the StringDisplay

// Any instance can be called with the same method name
display1.output();
display2.output();
display3.output();
