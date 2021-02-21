// ˅
'use strict';

import { Observer } from './observer';
import { ValueNumber } from './value-number';

// ˄

// Display values with a bar chart.
export class BarChartObserver implements Observer {
    // ˅
    
    // ˄

    update(value: ValueNumber): void {
        // ˅
		var barChart: string = 'Bar chart: ';
		for (var i: number = 0; i < value.valueNumber; i++) {
			barChart += '*';
		}
		console.log(barChart);

        const sleep: any = require('sleep');
        sleep.msleep(100);   // Wait 100ms
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
