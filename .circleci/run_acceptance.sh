#!/bin/bash
export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${CIRCLE_BRANCH} - ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

# Browserstack only allows for 2 threads to run at once, so we have to break up the browsers
npx testcafe "browserstack:firefox" tests/acceptance/acceptancesuite.js
npx testcafe "browserstack:chrome" tests/acceptance/acceptancesuite.js
npx testcafe "browserstack:safari" tests/acceptance/acceptancesuite.js
npx testcafe "browserstack:ie@11.0" tests/acceptance/acceptancesuite.js