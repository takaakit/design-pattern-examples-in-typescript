/*
Display a character or string repeatedly 5 times.
 */
'use strict';

import { AbstractDisplay } from './abstract-display';
import { CharDisplay } from './char-display';
import { StringDisplay } from './string-display';

const display1: AbstractDisplay = new CharDisplay(`H`);
display1.output();

const display2: AbstractDisplay = new StringDisplay(`Hello world.`);
display2.output();
