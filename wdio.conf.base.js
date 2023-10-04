// wdio.conf.base.js (ES module)
const config = {
  // Common configuration options shared across different environments

  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
    },
    // Additional capabilities for other browsers can be added here
  ],

  logLevel: "info",

  baseUrl: "http://localhost",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
   
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  // Hooks, services, and other shared configurations can also be defined here
};

export default config;
