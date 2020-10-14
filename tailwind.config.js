const plugin = require("tailwindcss/plugin");

/**
 * A new button component
 *
 * @see https://tailwindcss.com/docs/extracting-components#writing-a-component-plugin
 */
const buttonPlugin = plugin(function ({ addComponents }) {
  const buttons = {
    ".btn": {
      padding: ".5em 1rem",
      borderRadius: ".25rem",
      fontWeight: "600",
    },
    ".btn-blue": {
      backgroundColor: "#3490dc",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#2779bd",
      },
    },
    ".btn-red": {
      backgroundColor: "#e3342f",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#cc1f1a",
      },
    },
  };

  addComponents(buttons);
});

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [buttonPlugin],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
};
