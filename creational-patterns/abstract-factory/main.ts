/*
Create a hierarchical link collection as an HTML file. It can be created in either tabular or list format.
 */
'use strict';

import { Factory } from './factory/factory';
import { Data } from './factory/data';
import { Link } from './factory/link';
import { Page } from './factory/page';
import { ListFactory } from './list-factory/list-factory';
import { TableFactory } from './table-factory/table-factory';
import * as rl from 'readline';

console.log(`Please enter a number (1 or 2):`);
console.log(`  1: Create objects by using ListFactory`);
console.log(`  2: Create objects by using TableFactory`);

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(``, (data: any) => {
    const input: number = Number(data);
    readline.close();
    if (isNaN(input)) {
        console.error(`Unexpected value.`);
        process.exit(1);
    }

    let factory: Factory;
    switch (input) {
        case 1:
            factory = new ListFactory();
            break;
        case 2:
            factory = new TableFactory();
            break;
        default:
            console.error(`The value is not 1 or 2.`);
            process.exit(1);
    }

    const washingtonPost: Link = factory.createLink(`The Washington Post`, `https://www.washingtonpost.com/`);
    const newYorkTimes: Link = factory.createLink(`The NewYork Times`, `https://www.nytimes.com/`);
    const financialTimes: Link = factory.createLink(`The Financial Times`, `https://www.ft.com/`);

    const newspaper: Data = factory.createData(`Newspaper`);
    newspaper.add(washingtonPost);
    newspaper.add(newYorkTimes);
    newspaper.add(financialTimes);

    const yahoo: Link = factory.createLink(`Yahoo!`, `https://www.yahoo.com/`);
    const google: Link = factory.createLink(`Google`, `https://www.google.com/`);

    const searchEngine: Data = factory.createData(`Search engine`);
    searchEngine.add(yahoo);
    searchEngine.add(google);

    const linkPage: Page = factory.createPage(`LinkPage`, `James Smith`);
    linkPage.add(newspaper);
    linkPage.add(searchEngine);

    linkPage.output();
});

