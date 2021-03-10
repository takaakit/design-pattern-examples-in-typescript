/*
A trouble is turned around among supporters, and the trouble will be handled by the supporter who can handle it.
There are four types of supporters below:
* LazySupporter doesn't handle any trouble
* MoodySupporter handles odd ID troubles
* SpecialSupporter handles a trouble of the target ID.
* LimitedSupporter handles troubles below the limit ID.
 */
'use strict';

import { Supporter } from './supporter';
import { LazySupporter } from './lazy-supporter';
import { MoodySupporter } from './moody-supporter';
import { SpecialSupporter } from './special-supporter';
import { LimitedSupporter } from './limited-supporter';
import { Trouble } from './trouble';

const emily: Supporter = new LazySupporter('Emily');
const william: Supporter = new MoodySupporter('William');
const amelia: Supporter = new SpecialSupporter('Amelia', 6);
const joseph: Supporter = new LimitedSupporter('Joseph', 5);

// Make a chain.
emily.setNext(william).setNext(amelia).setNext(joseph);

// Various troubles occurred.
for (let i: number = 0; i < 10; i++) {
	emily.support(new Trouble(i));
}
