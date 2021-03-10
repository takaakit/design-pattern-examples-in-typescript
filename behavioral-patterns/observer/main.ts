/*
Observers observe objects generating a numerical value and display the value.
The display formats are digits and bar charts.
 */
'use strict';

import { RandomNumberValue } from './random-number-value';
import { DigitObserver } from './digit-observer';
import { BarChartObserver } from './bar-chart-observer';

const value: RandomNumberValue = new RandomNumberValue();
value.addObserver(new DigitObserver());
value.addObserver(new BarChartObserver());
value.generate();
