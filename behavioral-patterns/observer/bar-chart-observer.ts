// ˅
'use strict';

import { Observer } from './observer';
import { NumberValue } from './number-value';

// ˄

// Display number values with a bar chart.
export class BarChartObserver implements Observer {
    // ˅
    
    // ˄

    update(numberValue: NumberValue): void {
        // ˅
		var barChart: string = 'Bar chart: ';
		for (var i: number = 0; i < numberValue.value; i++) {
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
