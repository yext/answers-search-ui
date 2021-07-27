#!/bin/bash
export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${CIRCLE_BRANCH} - ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

. $(dirname $0)/testcafe_config

if [[ $CIRCLE_BRANCH == release/*
  || $CIRCLE_BRANCH == hotfix/*
  || $CIRCLE_BRANCH == master
  || $CIRCLE_BRANCH == support* ]]
then
  npx testcafe "browserstack:ie@11.0,browserstack:safari" $TEST_FILES -q --app "$APP_INIT" --app-init-delay $APP_INIT_DELAY
else
  npx testcafe -c 2 "browserstack:ie@11.0" $TEST_FILES -q --app "$APP_INIT" --app-init-delay $APP_INIT_DELAY
fi