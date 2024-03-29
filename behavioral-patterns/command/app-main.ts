// ˅
'use strict';

import { Command } from './command';
import { PaintingCommand } from './painting-command';
import { HistoryCommand } from './history-command';
import { PaintingCanvas } from './painting-canvas';

// ˄

export class AppMain {
    // ˅
    
    // ˄

    private isDragging: boolean;

    // Painting history
    private readonly history: HistoryCommand;

    private readonly paintingCanvas: PaintingCanvas;

    private readonly canvas: HTMLCanvasElement;

    private readonly undoButton: HTMLButtonElement;

    private readonly clearButton: HTMLButtonElement;

    constructor() {
        // ˅
        this.isDragging = false;
        this.canvas = <HTMLCanvasElement>document.getElementById(`canvas`);
        this.undoButton = <HTMLButtonElement>document.getElementById(`undoButton`)
        this.clearButton = <HTMLButtonElement>document.getElementById(`clearButton`)
        this.history = new HistoryCommand();
        this.paintingCanvas = new PaintingCanvas(this.canvas.getContext(`2d`), this.canvas.width, this.canvas.height);

        this.canvas.addEventListener(`mousedown`, () => this.onMouseDown());
        this.canvas.addEventListener(`mousemove`, (event) => this.onMouseMove(event));
        this.canvas.addEventListener(`mouseup`, () => this.onMouseUp());
        this.undoButton.addEventListener(`click`, () => this.onUndoButtonClick());
        this.clearButton.addEventListener(`click`, () => this.onClearButtonClick());

        this.paintingCanvas.clear();
        // ˄
    }

    private onMouseDown(): void {
        // ˅
        this.isDragging = true;
        // ˄
    }

    private onMouseMove(event: MouseEvent): void {
        // ˅
        if(this.isDragging){
            const paintingPosX = event.clientX - this.canvas.getBoundingClientRect().left;
            const paintingPosY = event.clientY - this.canvas.getBoundingClientRect().top ;
            const command: Command = new PaintingCommand(this.paintingCanvas, paintingPosX, paintingPosY);
            this.history.add(command);
            command.execute();
        }
        // ˄
    }

    private onMouseUp(): void {
        // ˅
        this.isDragging = false;
        // ˄
    }

    private onUndoButtonClick(): void {
        // ˅
        this.paintingCanvas.clear();
        this.history.undo();
        this.history.execute();
        // ˄
    }

    private onClearButtonClick(): void {
        // ˅
        this.paintingCanvas.clear();
        this.history.clear();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
