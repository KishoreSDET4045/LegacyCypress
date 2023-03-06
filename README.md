# README #

This repository include the cypress cucumber typescript framework to build e2e automated tests for DDIQ application.

### How do I get set up? ###

* Checkout git project: git clone <url> 
* Install node version 15.1.0
* Install npm dependencies: npm install
* Deployment instructions

### How to run tests? ###

* Run tests in headless mode: npm run cy:run
* Open cypress dashboard and run tests: npm run cy:open

### Contribution guidelines ###

* Writing tests
    + add feature files inside: cypress/integration
    + add page object files inside: cypress/support/pageObject
    + add step definition files inside: cypress/support/stepDefinition
    + add test data inside: cypress/fixture
    + add cypress related custom commands inside: cypress/support/commands.ts
* Report
    + after executing the tests, run command: "npm run get-report" to generate HTML report
* Other guidelines
    + format the code before push
* Docker Execution
    + Build image: docker image build -t ddiq-e2e .
    + Run image: docker run --network=host -v $PWD/report:/e2e/cypress/screenshots/ -v $PWD/report:/e2e/cypress/videos/ -v $PWD/report:/e2e/report/ ddiq-e2e

### Who do I talk to? ###

* Repo owner: mkumar@exiger.com