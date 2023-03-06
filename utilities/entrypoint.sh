SERVER=$1
SLACK_CHANNEL=$2

npx ts-node runtests.ts --server $SERVER --slackChannel $SLACK_CHANNEL
npx ts-node ./utilities/getHtmlReport.ts
node ./utilities/getHtmlReport2.js