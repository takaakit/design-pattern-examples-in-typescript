/*
Create a simple homepage through a Facade("PageCreator"). The Facade gets info from the "DataLibrary" and uses the info to create an HTML file.
 */
'use strict';

import { PageCreator } from './page-creator';

PageCreator.createSimpleHomepage('emily@example.com', 'Homepage.html');
