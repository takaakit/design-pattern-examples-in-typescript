// ˅
'use strict';

import { Subject } from './subject';

// ˄

// Defines an updating interface for objects that should be notified of changes in a subject.
export interface Observer {

    update(changedSubject: Subject): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
