#!/bin/bash

CONFIG_FILE=$(dirname $0)/testcafe.json

if [[ $CIRCLE_BRANCH == release/*
  || $CIRCLE_BRANCH == hotfix/*
  || $CIRCLE_BRANCH == master
  || $CIRCLE_BRANCH == support* ]]
then
  npx testcafe -c 3 "chrome:headless,firefox:headless" --config-file $CONFIG_FILE
else
  npx testcafe -c 3 "chrome:headless" --config-file $CONFIG_FILE
fi
