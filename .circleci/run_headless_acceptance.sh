#!/bin/bash
. $(dirname $0)/testcafe_config

if [[ $CIRCLE_BRANCH == release/*
  || $CIRCLE_BRANCH == hotfix/*
  || $CIRCLE_BRANCH == master
  || $CIRCLE_BRANCH == support* ]]
then
  npx testcafe -c 3 "chrome:headless,firefox:headless" $TEST_FILES -q --app "$APP_INIT" --app-init-delay $APP_INIT_DELAY
else
  npx testcafe -c 3 "chrome:headless" $TEST_FILES -q --app "$APP_INIT" --app-init-delay $APP_INIT_DELAY
fi