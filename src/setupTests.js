/* eslint-env node */

import "@testing-library/jest-dom";

// Polyfill pour matchMedia
globalThis.matchMedia =
  globalThis.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
