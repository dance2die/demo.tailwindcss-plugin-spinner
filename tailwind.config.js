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

/**
 * Spinner CSS copied from https://projects.lukehaas.me/css-loaders/
 * Converted CSS to JavaScript using https://transform.tools/css-to-js
 */
const spinnerComponentPlugin = plugin(function ({ addComponents }) {
  const spinners = {
    ".spinner": {
      color: "#ffffff",
      fontSize: "20px",
      margin: "100px auto",
      width: "1em",
      height: "1em",
      borderRadius: "50%",
      position: "relative",
      textIndent: "-9999em",
      WebkitAnimation: "load4 1.3s infinite linear",
      animation: "load4 1.3s infinite linear",
      WebkitTransform: "translateZ(0)",
      msTransform: "translateZ(0)",
      transform: "translateZ(0)",
    },
    "@-webkit-keyframes load4": {
      "0%,\n  100%": {
        boxShadow:
          "0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0",
      },
      "12.5%": {
        boxShadow:
          "0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em",
      },
      "25%": {
        boxShadow:
          "0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em",
      },
      "37.5%": {
        boxShadow:
          "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em",
      },
      "50%": {
        boxShadow:
          "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em",
      },
      "62.5%": {
        boxShadow:
          "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em",
      },
      "75%": {
        boxShadow:
          "0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0",
      },
      "87.5%": {
        boxShadow:
          "0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em",
      },
    },
    "@keyframes load4": {
      "0%,\n  100%": {
        boxShadow:
          "0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0",
      },
      "12.5%": {
        boxShadow:
          "0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em",
      },
      "25%": {
        boxShadow:
          "0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em",
      },
      "37.5%": {
        boxShadow:
          "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em",
      },
      "50%": {
        boxShadow:
          "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em",
      },
      "62.5%": {
        boxShadow:
          "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em",
      },
      "75%": {
        boxShadow:
          "0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0",
      },
      "87.5%": {
        boxShadow:
          "0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em",
      },
    },
  };

  const loader = {
    ".loader,\n.loader:before,\n.loader:after": { borderRadius: "50%" },
    ".loader": {
      color: "#ffffff",
      fontSize: "11px",
      textIndent: "-99999em",
      margin: "55px auto",
      position: "relative",
      width: "10em",
      height: "10em",
      boxShadow: "inset 0 0 0 1em",
      WebkitTransform: "translateZ(0)",
      msTransform: "translateZ(0)",
      transform: "translateZ(0)",
    },
    ".loader:before,\n.loader:after": { position: "absolute", content: "''" },
    ".loader:before": {
      width: "5.2em",
      height: "10.2em",
      background: "#8e2f83",
      borderRadius: "10.2em 0 0 10.2em",
      top: "-0.1em",
      left: "-0.1em",
      WebkitTransformOrigin: "5.1em 5.1em",
      transformOrigin: "5.1em 5.1em",
      WebkitAnimation: "load2 2s infinite ease 1.5s",
      animation: "load2 2s infinite ease 1.5s",
    },
    ".loader:after": {
      width: "5.2em",
      height: "10.2em",
      background: "#8e2f83",
      borderRadius: "0 10.2em 10.2em 0",
      top: "-0.1em",
      left: "4.9em",
      WebkitTransformOrigin: "0.1em 5.1em",
      transformOrigin: "0.1em 5.1em",
      WebkitAnimation: "load2 2s infinite ease",
      animation: "load2 2s infinite ease",
    },
    "@-webkit-keyframes load2": {
      "0%": { WebkitTransform: "rotate(0deg)", transform: "rotate(0deg)" },
      "100%": {
        WebkitTransform: "rotate(360deg)",
        transform: "rotate(360deg)",
      },
    },
    "@keyframes load2": {
      "0%": { WebkitTransform: "rotate(0deg)", transform: "rotate(0deg)" },
      "100%": {
        WebkitTransform: "rotate(360deg)",
        transform: "rotate(360deg)",
      },
    },
  };

  addComponents(spinners);
  addComponents(loader);
});

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [buttonPlugin, spinnerComponentPlugin],
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
