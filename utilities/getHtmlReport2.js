const report = require('multiple-cucumber-html-reporter')
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

const cucumberJsonDir = path.resolve(process.cwd(), "cypress/screenshots/cucumber-json") //'./cypress/test-results/cucumber-json'
const cucumberReportFileMap = {}
const cucumberReportMap = {}
const jsonIndentLevel = 2
const htmlReportDir = path.resolve(process.cwd(), "report/htmlReport") //'./cypress/test-results/cucumber-json'./src/cyreport/html'
const screenshotsDir = path.resolve(process.cwd(), "report/screenshots")
//const snapshotDir = './cypress/snapshots'

getCucumberReportMaps()
addScreenshots()
//addSnapshots()
generateReport()

function getCucumberReportMaps() {
    filenames = fs.readdirSync(cucumberJsonDir);
    const files = fs.readdirSync(cucumberJsonDir).filter(file => {
        return file.indexOf('.json') > -1
    })
    files.forEach(file => {
        const json = JSON.parse(
            fs.readFileSync(path.join(cucumberJsonDir, file))
        )
        if (!json[0]) { return }
        const [feature] = json[0].uri.split('/').reverse()
        cucumberReportFileMap[feature] = file
        cucumberReportMap[feature] = json
    })
}

function addScreenshots() {
    if (fs.existsSync(screenshotsDir)) { //only if screenshots exists
        const prependPathSegment = pathSegment => location => path.join(pathSegment, location)
        const readdirPreserveRelativePath = location => fs.readdirSync(location).map(prependPathSegment(location))
        const readdirRecursive = location => readdirPreserveRelativePath(location)
            .reduce((result, currentValue) => fs.statSync(currentValue).isDirectory()
                ? result.concat(readdirRecursive(currentValue))
                : result.concat(currentValue), [])
        const screenshots = readdirRecursive(path.resolve(screenshotsDir)).filter(file => {
            return file.indexOf('.png') > -1
        })
        const featuresList = Array.from(new Set(screenshots.map(x => x.match(/[\w-_.]+.feature/g)[0])))
        featuresList.forEach(feature => {
            screenshots.forEach(screenshot => {
                const regex = /(?<=--\ ).+?((?=\ (example\ #\d+))|(?=\ (failed))|(?=.\w{3}))/g
                const [scenarioName] = screenshot.match(regex)
                const myScenarios = cucumberReportMap[feature][0].elements.filter(
                    e => scenarioName.includes(e.name)
                )
                if (!myScenarios) {
                    return
                }
                let foundFailedStep = false
                myScenarios.forEach(myScenario => {
                    if (foundFailedStep) {
                        return
                    }
                    let myStep
                    if (screenshot.includes('(failed)')) {
                        myStep = myScenario.steps.find(
                            step => step.result.status === 'failed'
                        )
                    }
                    else {
                        myStep = myScenario.steps.find(
                            step => step.result.status === 'passed'
                        )
                    }
                    if (!myStep) {
                        return
                    }
                    const data = fs.readFileSync(
                        path.resolve(screenshot)
                    )
                    if (data) {
                        const base64Image = Buffer.from(data, 'binary').toString('base64')
                        if (!myStep.embeddings) {
                            myStep.embeddings = []
                            myStep.embeddings.push({ data: base64Image, mime_type: 'image/png' })
                            foundFailedStep = true
                        }
                    }
                })
                //Write JSON with screenshot back to report file.
                fs.writeFileSync(
                    path.join(cucumberJsonDir, cucumberReportFileMap[feature]),
                    JSON.stringify(cucumberReportMap[feature], null, jsonIndentLevel)
                )
            })
        })
    }
}

function generateReport() {
    if (!fs.existsSync(cucumberJsonDir)) {
        console.warn(chalk.yellow(`WARNING: Folder './${cucumberJsonDir}' not found.REPORT CANNOT BE CREATED!`))
    } else {
        report.generate({
            jsonDir: cucumberJsonDir,
            reportPath: htmlReportDir,
            displayDuration: true,
            useCDN: true,
            pageTitle: 'Your App Name here',
            reportName: `App Name - ${new Date().toLocaleString()}`,
            metadata: {
                app: {
                    name: '103-Mobile',
                    version: '1.70.x'
                },
                browser: {
                    name: 'chrome'
                },
                device: 'EMULATOR',
                platform: {
                    name: 'windows'
                }
            },
            customData: {
                title: 'Run info',
                data: [
                    { label: 'Project', value: 'CyMobileE2E' },
                    { label: 'Release', value: '20.2' },
                    { label: 'Cycle', value: 'I1' },
                    { label: 'Execution Start Time', value: 'Sept 19th 2020, 02:31 PM EST' },
                    { label: 'Execution End Time', value: 'Sept 19th 2020, 02:56 PM EST' }
                ]
            }
        })
    }
}