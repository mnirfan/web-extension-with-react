import { browser } from '../globals.js';

browser.devtools.panels.create(
    'Awesome',
    '/devtool/assets/pepe.png',
    '/devtool/panel.html'
);
