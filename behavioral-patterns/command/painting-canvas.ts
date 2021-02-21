// ˅
'use strict';

import { PaintingTarget } from './painting-target';

// ˄

export class PaintingCanvas implements PaintingTarget {
    // ˅
    
    // ˄

    private readonly COLOR: string;

    // Radius of the painting point
    private readonly POINT_RADIUS: number;

    private readonly width: number;

    private readonly height: number;

    private readonly context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        // ˅
        this.COLOR = 'lightgreen';
        this.POINT_RADIUS = 10;
        this.context = context;
        this.width = width;
        this.height = height;
        // ˄
    }

    paint(paintingPosX: number, paintingPosY: number): void {
        // ˅
        this.context.beginPath();
        this.context.arc(paintingPosX, paintingPosY, this.POINT_RADIUS, 0, Math.PI*2, false);
        this.context.fillStyle = this.COLOR;
        this.context.fill();
        // ˄
    }

    clear(): void {
        // ˅
        this.context.clearRect(0, 0, this.width, this.height);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
