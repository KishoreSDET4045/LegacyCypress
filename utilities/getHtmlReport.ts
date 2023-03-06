import { generate } from 'cucumber-html-reporter';
var options: any = {

    theme: 'hierarchy',

    jsonFile: 'cypress/screenshots/cucumber-json/',

    output: 'report/index.html',

    reportSuiteAsScenarios: true,

    scenarioTimestamp: true,

    launchReport: true,

    metadata: {

        "DDIQ Version": "Latest",

        "Test Environment": "Local",

        "Browser": "Chrome  92",

        "Platform": "Mac System",

        "Parallel": "Scenarios",

        "Executed": "Local"

    }

};

generate(options);