// Display a character string enclosed with a frame line, or drawn with an underline.
'use strict';

import { Manager } from './framework/manager';
import { Display } from './framework/display';
import { UnderlineDisplay } from './underline-display';
import { FrameDisplay } from './frame-display';

// Create a manager
const manager: Manager = new Manager();
const emphasisUnderline: Display = new UnderlineDisplay('~');
const highlightFrame: Display = new FrameDisplay('+');
const warningFrame: Display = new FrameDisplay('#');
manager.registerDisplay('emphasis', emphasisUnderline);
manager.registerDisplay('highlight', highlightFrame);
manager.registerDisplay('warning', warningFrame);

// Create displays
const display1: Display = manager.getDisplay('emphasis');
display1.show('Nice to meet you.');
const display2: Display = manager.getDisplay('highlight');
display2.show('Nice to meet you.');
const display3: Display = manager.getDisplay('warning');
display3.show('Nice to meet you.');
