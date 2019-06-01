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

    private readonly canvas: HTMLCanvasElement;

    private readonly context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        // ˅
        this.COLOR = 'lightgreen';
        this.POINT_RADIUS = 10;
        this.canvas = canvas;
        this.context = context;
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
        this.context.clearRect(0, 0, this.canvas.getBoundingClientRect().width, this.canvas.getBoundingClientRect().height);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
