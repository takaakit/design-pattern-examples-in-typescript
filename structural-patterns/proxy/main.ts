/*
Print on a named printer. Setting and changing the printer name is done by Proxy (PrinterProxy).
At the time of printing, create an instance of the RealSubject (RealPrinter) for the first time.
 */
'use strict';

import { PrinterProxy } from './printer-proxy';

const p: PrinterProxy = new PrinterProxy('PRINTER-A');
console.log('The printer name is ' + p.printerName + '.');
p.printerName = 'PRINTER-B';
console.log('The printer name is ' + p.printerName + '.');

console.log('Print start.');
p.output('Nice to meet you.');
console.log('Print exit.');
