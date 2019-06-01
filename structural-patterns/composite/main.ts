// Represents a file system composed of files and directories.
'use strict';

import { DirectoryElement } from './directory-element';
import { FileElement } from './file-element';

console.log('Create a file system...');
const rootDir: DirectoryElement = new DirectoryElement('root');
const homeDir: DirectoryElement = new DirectoryElement('home');
const binDir: DirectoryElement = new DirectoryElement('bin');
const etcDir: DirectoryElement = new DirectoryElement('etc');
const emilyDir: DirectoryElement = new DirectoryElement('emily');
const jamesDir: DirectoryElement = new DirectoryElement('james');
const oliviaDir: DirectoryElement = new DirectoryElement('olivia');

rootDir.add(homeDir);
rootDir.add(binDir);
rootDir.add(etcDir);

binDir.add(new FileElement('ls', 100));
binDir.add(new FileElement('mkdir', 50));
homeDir.add(emilyDir);
homeDir.add(jamesDir);
homeDir.add(oliviaDir);

emilyDir.add(new FileElement('homework.doc', 40));
jamesDir.add(new FileElement('homework.doc', 50));
jamesDir.add(new FileElement('app.exe', 60));
oliviaDir.add(new FileElement('homework.doc', 70));
oliviaDir.add(new FileElement('app.exe', 80));
oliviaDir.add(new FileElement('tips.html', 90));

rootDir.print('');
