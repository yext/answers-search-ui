#!/bin/bash
export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${CIRCLE_BRANCH} - ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

npx testcafe "browserstack:ie@11.0,browserstack:safari" tests/acceptance/acceptancesuite.js