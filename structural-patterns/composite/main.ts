// Represents a file system composed of files and directories.
'use strict';

import { DirectoryElement } from './directory-element';
import { FileElement } from './file-element';

console.log('Create a file system...');

const binDir: DirectoryElement = new DirectoryElement('bin');
const lsFile = new FileElement('ls', 20);
binDir.add(lsFile);
const mkdirFile = new FileElement('mkdir', 40);
binDir.add(mkdirFile);

const emilyDir: DirectoryElement = new DirectoryElement('emily');
const homeworkFile = new FileElement('homework.doc', 60);
emilyDir.add(homeworkFile);

const jamesDir: DirectoryElement = new DirectoryElement('james');
const appFile = new FileElement('app.exe', 80);
jamesDir.add(appFile);

const homeDir: DirectoryElement = new DirectoryElement('home');
homeDir.add(emilyDir);
homeDir.add(jamesDir);

const rootDir: DirectoryElement = new DirectoryElement('root');
rootDir.add(homeDir);
rootDir.add(binDir);

rootDir.print('');
