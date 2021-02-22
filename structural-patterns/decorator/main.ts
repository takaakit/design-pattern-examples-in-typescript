/*
Display a string with decorative frames. The frames can be combined arbitrarily.
 */
'use strict';

import { Display } from './display';
import { MessageDisplay } from './message-display';
import { SideFrame } from './side-frame';
import { FullFrame } from './full-frame';

const displayA: Display = new MessageDisplay('Nice to meet you.');
displayA.show();

const displayB: Display = new SideFrame(new MessageDisplay('Nice to meet you.'), '!');
displayB.show();

const displayC: Display = new FullFrame(new SideFrame(new MessageDisplay('Nice to meet you.'), '!'));
displayC.show();
