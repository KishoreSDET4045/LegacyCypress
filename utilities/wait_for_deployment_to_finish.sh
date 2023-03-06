#!/bin/bash

echo "========== Waiting for deployment to finish =========="

SERVER=$1

CURL_ENDPOINT="curl --connect-timeout 1 --silent -H 'Accept: text/plain' https://$SERVER/ddiq-services/rest/admin/version"
RESPONSE=$($CURL_ENDPOINT | grep Product)

while [ "$RESPONSE" != "Product: ddiq" ];
do
  echo "Deployment not yet finished. Checking again in 30 seconds"
  sleep 30

  RESPONSE=$($CURL_ENDPOINT | grep Product)
done

echo "Deployment Complete."
echo ""
