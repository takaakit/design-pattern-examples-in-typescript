/*
Display a character string as follows
  -- Nice to meet you --
or display it as follows.
  [[ Nice to meet you ]]
*/
'use strict';

import { Print } from './print';
import { PrintMessageDisplay } from './print-message-display';

const p: Print = new PrintMessageDisplay('Nice to meet you');
p.printWeak();
p.printStrong();
