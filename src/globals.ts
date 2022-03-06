declare const browser: typeof chrome;

// Normalize access to extension APIs across browsers.
const _browser: typeof chrome = typeof browser !== 'undefined' ? browser : chrome;

export {
  _browser as browser,
}
