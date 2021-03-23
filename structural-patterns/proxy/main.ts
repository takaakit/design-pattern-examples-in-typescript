/*
Print on a named printer. Setting and changing the printer name is done by Proxy (ProxyPrinter).
At the time of printing, create an instance of the RealSubject (RealPrinter) for the first time.
 */
'use strict';

import { ProxyPrinter } from './proxy-printer';

const p: ProxyPrinter = new ProxyPrinter('PRINTER-A');
console.log('The printer name is ' + p.getName() + '.');
p.changeName('PRINTER-B');
console.log('The printer name is ' + p.getName() + '.');

console.log('Print start.');
p.output('Nice to meet you.');
console.log('Print exit.');
