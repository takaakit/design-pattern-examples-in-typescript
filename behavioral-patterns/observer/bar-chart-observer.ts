// ˅
'use strict';

import { Subject } from './subject';
import { NumberSubject } from './number-subject';
import { Observer } from './observer';

// ˄

// Display values as a bar chart.
export class BarChartObserver implements Observer {
    // ˅
    
    // ˄

    private numberSubject: NumberSubject;

    constructor(numberSubject: NumberSubject) {
        // ˅
        this.numberSubject = numberSubject;
        
        // ˄
    }

    update(changedSubject: Subject): void {
        // ˅
        if (changedSubject === this.numberSubject) {
            let barChart: string = 'Bar chart: ';
            for (let i: number = 0; i < this.numberSubject.value; i++) {
                barChart += '*';
            }
            console.log(barChart);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
