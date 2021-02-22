/*
Check whether the same instance is obtained.
 */
'use strict';

import { Singleton } from './singleton';

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
if (obj1 === obj2) {
    console.log('obj1 and obj2 are the same instance.');
} else {
    console.log('obj1 and obj2 are different instances.');
}
