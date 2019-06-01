// Someone handles a trouble.
'use strict';

import { Supporter } from './supporter';
import { LazySupporter } from './lazy-supporter';
import { MoodySupporter } from './moody-supporter';
import { SpecialSupporter } from './special-supporter';
import { LimitedSupporter } from './limited-supporter';
import { Trouble } from './trouble';

const emily: Supporter = new LazySupporter('Emily');
const william: Supporter = new MoodySupporter('William');
const amelia: Supporter = new SpecialSupporter('Amelia', 153);
const michael: Supporter = new SpecialSupporter('Michael', 340);
const joseph: Supporter = new LimitedSupporter('Joseph', 250);
const lily: Supporter = new LimitedSupporter('Lily', 250);

// Make a chain.
emily.setNext(william).setNext(amelia).setNext(michael).setNext(joseph).setNext(lily);

// Various troubles occurred.
for (let i: number = 0; i < 500; i += 17) {
	emily.support(new Trouble(i));
}
