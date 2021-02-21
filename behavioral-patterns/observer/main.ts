// Observers observe objects generating a numerical value and display the value.
'use strict';

import { RandomNumber } from './random-number';
import { DigitObserver } from './digit-observer';
import { BarChartObserver } from './bar-chart-observer';

const randomNumber: RandomNumber = new RandomNumber();
const digitObserver: DigitObserver = new DigitObserver();
randomNumber.addObserver(digitObserver);
const barChartObserver: BarChartObserver = new BarChartObserver();
randomNumber.addObserver(barChartObserver);
randomNumber.generate();
