/*
Display only one line or display the specified number of lines.
 */
'use strict';

import { Display } from './display';
import { MultiLineDisplay } from './multi-line-display';
import { TextDisplayImpl } from './text-display-impl';

const d1: Display = new Display(new TextDisplayImpl(`Japan`));
d1.output();

const d2: MultiLineDisplay = new MultiLineDisplay(new TextDisplayImpl(`The United States of America`));
d2.output();
d2.outputMultiple(3);
