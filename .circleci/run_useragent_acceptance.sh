#!/bin/bash

npx testcafe --list-browsers

export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${CIRCLE_BRANCH} - ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

npx testcafe chrome:headless,firefox:headless,browserstack:safari,edge tests/acceptance/useragent/useragentsuite.js --config-file ./.circleci/testcafe.json
