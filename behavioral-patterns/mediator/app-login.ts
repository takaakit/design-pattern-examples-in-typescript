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

    private colleagueRadioLogin: ColleagueRadioButton;

    private colleagueRadioGuest: ColleagueRadioButton;

    private colleagueTextUsername: ColleagueTextField;

    private colleagueTextPassword: ColleagueTextField;

    private colleagueButtonOk: ColleagueButton;

    private colleagueButtonCancel: ColleagueButton;

    constructor() {
        // ˅
        this.createColleagues();
        // ˄
    }

    createColleagues(): void {
        // ˅
        this.colleagueRadioGuest = new ColleagueRadioButton(<HTMLButtonElement>document.getElementById('radioGuest'));
        this.colleagueRadioLogin = new ColleagueRadioButton(<HTMLButtonElement>document.getElementById('radioLogin'));
        this.colleagueTextUsername = new ColleagueTextField(<HTMLTextAreaElement>document.getElementById('textUsername'));
        this.colleagueTextPassword = new ColleagueTextField(<HTMLTextAreaElement>document.getElementById('textPassword'));
        this.colleagueButtonOk = new ColleagueButton(<HTMLButtonElement>document.getElementById('buttonOk'));
        this.colleagueButtonCancel = new ColleagueButton(<HTMLButtonElement>document.getElementById('buttonCancel'));

        // Set mediators
        this.colleagueRadioGuest.mediator = this;
        this.colleagueRadioLogin.mediator = this;
        this.colleagueTextUsername.mediator = this;
        this.colleagueTextPassword.mediator = this;
        this.colleagueButtonOk.mediator = this;
        this.colleagueButtonCancel.mediator = this;

        // Generate a click event of the guest radio button.
        (<HTMLButtonElement>document.getElementById('radioGuest')).click();
        // ˄
    }

    // Change enable/disable of the Colleagues when notified from the Mediators.
    colleagueChanged(event: Event): void {
        // ˅
        if (event.currentTarget === document.getElementById('buttonOk')
                || event.currentTarget === document.getElementById('buttonCancel')) {
            window.open('','_self').close();
        }
        else {
            if (event.currentTarget === document.getElementById('radioGuest')) { // Guest mode
                this.colleagueTextUsername.setActivation(false);
                this.colleagueTextPassword.setActivation(false);
                this.colleagueButtonOk.setActivation(true);
            }
            else {                                                              // Login mode
                this.colleagueTextUsername.setActivation(true);
                this.colleagueTextPassword.setActivation(true);

                // Judge whether the changed Colleage is enabled or disabled
                if (this.colleagueTextUsername.isEmpty() === false
                        && this.colleagueTextPassword.isEmpty() === false) {
                    this.colleagueButtonOk.setActivation(true);
                }
                else {
                    this.colleagueButtonOk.setActivation(false);
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
