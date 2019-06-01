// Display only one line or display the specified number of lines.
'use strict';

import { Display } from './display';
import { MultiLineDisplay } from './multi-line-display';
import { TextDisplayImpl } from './text-display-impl';

const d1: Display = new Display(new TextDisplayImpl('Japan'));
const d2: MultiLineDisplay = new MultiLineDisplay(new TextDisplayImpl('The United States of America'));
const d3: MultiLineDisplay = new MultiLineDisplay(new TextDisplayImpl('Brazil'));
d1.output();
d2.output();
d3.output();
d3.outputMultiple(3);
