import { browser } from '@/globals';

browser.devtools.panels.create(
    'Awesome',
    '/devtool/assets/pepe.png',
    '/devtool/panel.html'
);
