// ˅
'use strict';

import { Observer } from './observer';
import { NumberValue } from './number-value';

// ˄

// Display values as a bar chart.
export class BarChartObserver implements Observer {
    // ˅
    
    // ˄

    update(numberValue: NumberValue): void {
        // ˅
		let barChart: string = 'Bar chart: ';
		for (let i: number = 0; i < numberValue.value; i++) {
			barChart += '*';
		}
		console.log(barChart);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
