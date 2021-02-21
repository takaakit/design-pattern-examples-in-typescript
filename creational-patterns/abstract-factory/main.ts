// Create a hierarchical link collection as an HTML file.
'use strict';

import { Factory } from './factory/factory';
import { ListFactory } from './list-factory/list-factory';
import { TableFactory } from './table-factory/table-factory';

console.log('Please enter a number (1 or 2):');
console.log('  1: Create objects by using ListFactory');
console.log('  2: Create objects by using TableFactory');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (data: any) => {
    var input: number = Number(data);
    readline.close();
    if (isNaN(input)) {
        console.log('Unexpected value.');
        process.exit(1);
    }

    var factory: Factory = null;
    if (input == 1) {
        factory = new ListFactory();
    }
    else if (input == 2) {
        factory = new TableFactory();
    }
    else {
        console.log("The value is not 1 or 2.");
        process.exit(1);
    }

    const washingtonPost = factory.createLink('The Washington Post', 'https://www.washingtonpost.com/');
    const newYorkTimes = factory.createLink('The NewYork Times', 'https://www.nytimes.com/');
    const financialTimes = factory.createLink('The Financial Times', 'https://www.ft.com/');

    const newspaper = factory.createData('Newspaper');
    newspaper.add(washingtonPost);
    newspaper.add(newYorkTimes);
    newspaper.add(financialTimes);

    const yahoo = factory.createLink('Yahoo!', 'https://www.yahoo.com/');
    const google = factory.createLink('Google', 'https://www.google.com/');

    const searchEngine = factory.createData('Search engine');
    searchEngine.add(yahoo);
    searchEngine.add(google);

    const linkPage = factory.createPage('LinkPage', 'James Smith');
    linkPage.add(newspaper);
    linkPage.add(searchEngine);

    linkPage.output();
});

