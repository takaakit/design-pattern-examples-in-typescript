// ˅
'use strict';

// ˄

export class Memento {
    // ˅
    
    // ˄

    // Money
    money: number;

    // Desserts
    desserts: Array<string>;

    constructor(money: number) {
        // ˅
		this.money = money;
		this.desserts = new Array<string>();
        // ˄
    }

    // Add a dessert
    addDessert(dessert: string): void {
        // ˅
		this.desserts.push(dessert);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
