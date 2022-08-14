// ˅
'use strict';

import { Mediator } from './mediator';
import { ColleagueRadioButton } from './colleague-radio-button';
import { ColleagueTextField } from './colleague-text-field';
import { ColleagueButton } from './colleague-button';

// ˄

export class AppLogin implements Mediator {
    // ˅
    
    // ˄

    private radioLogin: ColleagueRadioButton;

    private radioGuest: ColleagueRadioButton;

    private textUsername: ColleagueTextField;

    private textPassword: ColleagueTextField;

    private buttonOk: ColleagueButton;

    private buttonCancel: ColleagueButton;

    constructor() {
        // ˅
        // Create TextField, Button and RadioButton
        this.createColleagues();

        // Set mediators
        this.radioGuest.mediator = this;
        this.radioLogin.mediator = this;
        this.textUsername.mediator = this;
        this.textPassword.mediator = this;
        this.buttonOk.mediator = this;
        this.buttonCancel.mediator = this;

        // Generate a click event of the Guest radio button.
        (<HTMLButtonElement>document.getElementById(`radioGuest`)).click();
        // ˄
    }

    createColleagues(): void {
        // ˅
        this.radioGuest = new ColleagueRadioButton(<HTMLInputElement>document.getElementById(`radioGuest`));
        this.radioLogin = new ColleagueRadioButton(<HTMLInputElement>document.getElementById(`radioLogin`));
        this.textUsername = new ColleagueTextField(<HTMLTextAreaElement>document.getElementById(`textUsername`));
        this.textPassword = new ColleagueTextField(<HTMLTextAreaElement>document.getElementById(`textPassword`));
        this.buttonOk = new ColleagueButton(<HTMLButtonElement>document.getElementById(`buttonOk`));
        this.buttonCancel = new ColleagueButton(<HTMLButtonElement>document.getElementById(`buttonCancel`));
        // ˄
    }

    // Change enable/disable of the Colleagues when notified from the Mediators.
    colleagueChanged(): void {
        // ˅
        if (this.buttonOk.isPressed() || this.buttonCancel.isPressed()) {
            document.body.innerHTML = `<h1>Dialog terminated.</h1>`     // Display a termination message
        }
        else {
            if (this.radioGuest.isSelected()) {         // Guest mode
                this.textUsername.setActivation(false);
                this.textPassword.setActivation(false);
                this.buttonOk.setActivation(true);
            }
            else {                                      // Login mode
                this.textUsername.setActivation(true);
                this.textPassword.setActivation(true);

                // Judge whether the changed Colleage is enabled or disabled
                if (this.textUsername.isEmpty() === false
                        && this.textPassword.isEmpty() === false) {
                    this.buttonOk.setActivation(true);
                }
                else {
                    this.buttonOk.setActivation(false);
                }
            }
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
