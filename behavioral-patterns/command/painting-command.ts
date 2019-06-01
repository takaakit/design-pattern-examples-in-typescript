// ˅
'use strict';

import { Command } from './command';
import { PaintingTarget } from './painting-target';

// ˄

// Command to paint a single point
export class PaintingCommand implements Command {
    // ˅
    
    // ˄

    // Painting position x
    private readonly paintingPosX: number;

    // Painting position y
    private readonly paintingPosY: number;

    protected paintingTarget: PaintingTarget;

    constructor(paintingObject: PaintingTarget, paintingPosX: number, paintingPosY: number) {
        // ˅
        this.paintingPosX = paintingPosX;
        this.paintingPosY = paintingPosY;
        this.paintingTarget = paintingObject;
        // ˄
    }

    execute(): void {
        // ˅
        this.paintingTarget.paint(this.paintingPosX, this.paintingPosY);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
