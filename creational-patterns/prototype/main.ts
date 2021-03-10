/*
Display a string enclosed with a frame line, or drawn with an underline. The Client (Main)
registers instances of the Display subclass in the Manager class. When necessary,
the Manager class asks those registered instances to return a clone. The Client (Main)
requires the returned clones to display.
 */
'use strict';

import { Manager } from './framework/manager';
import { Display } from './framework/display';
import { UnderlineDisplay } from './underline-display';
import { FrameDisplay } from './frame-display';

const manager: Manager = new Manager();

// Register instances of the "Display" subclass
const emphasisUnderline: Display = new UnderlineDisplay('~');
manager.registerDisplay('emphasis', emphasisUnderline);
const highlightFrame: Display = new FrameDisplay('+');
manager.registerDisplay('highlight', highlightFrame);
const warningFrame: Display = new FrameDisplay('#');
manager.registerDisplay('warning', warningFrame);

// Require to display
const display1: Display = manager.getDisplay('emphasis');
display1.show('Nice to meet you.');
const display2: Display = manager.getDisplay('highlight');
display2.show('Nice to meet you.');
const display3: Display = manager.getDisplay('warning');
display3.show('Nice to meet you.');
