import { browser } from '@/globals';

browser.devtools.panels.create(
    'Awesome',
    '/assets/cool-doge.png',
    '/devtool/panel.html'
);
