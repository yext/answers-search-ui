#!/bin/bash
export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${CIRCLE_BRANCH} - ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

if [[ $CIRCLE_BRANCH == release/*
  || $CIRCLE_BRANCH == hotfix/*
  || $CIRCLE_BRANCH == master
  || $CIRCLE_BRANCH == support* ]]
then
  # npm run acceptance -- --browsers browserstack:ie@11.0 browserstack:safari
  npx testcafe "browserstack:ie@11.0,browserstack:safari" tests/acceptance/acceptancesuites/*.js -q --app "npx serve -l tcp://0.0.0.0:9999" --app-init-delay 4000
else
  # npm run acceptance -- --browsers browserstack:ie@11.0 --concurrency 2
  npx testcafe -c 2 "browserstack:ie@11.0" tests/acceptance/acceptancesuites/*.js -q --app "npx serve -l tcp://0.0.0.0:9999" --app-init-delay 4000
fi