// ˅
'use strict';

import { Subject } from './subject';

// ˄

export interface Observer {

    update(changedSubject: Subject): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
