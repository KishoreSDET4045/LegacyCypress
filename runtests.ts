import { run } from 'cypress';
var argv = require('minimist')(process.argv.slice(2));

// Basic Cypress args
let CYPRESS_ARGS = {
    "headless": false,
    "browser": "chrome",
    "config": {
        "baseUrl": ""
    }
}

// setup base url from argv
if (argv.server) {
    CYPRESS_ARGS.config.baseUrl = `https://test-qa.ddiq.com/`
}
