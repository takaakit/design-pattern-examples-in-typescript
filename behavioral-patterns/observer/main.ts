/*
Observers observe a Subject object holding a numerical value and display the value.
The display formats are digits and bar charts.
 */
'use strict';

import { DigitObserver } from './digit-observer';
import { BarChartObserver } from './bar-chart-observer';
import { NumberSubject } from './number-subject';

let numberSubject: NumberSubject = new NumberSubject();
numberSubject.attach(new DigitObserver(numberSubject));
numberSubject.attach(new BarChartObserver(numberSubject));

(async () => {      // Note: Define an anonymous function with async keyword for using await keyword.
    for (let i: number = 0; i < 20; i++) {
        numberSubject.value = Math.floor(Math.random() * 50);
        await new Promise(r => setTimeout(r, 200));             // Wait 200ms
    }
})();
