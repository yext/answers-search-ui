#!/bin/bash

export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${GITHUB_BRANCH} - ${GITHUB_RUN_ID}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

if [[ $GITHUB_BRANCH == release/*
  || $GITHUB_BRANCH == hotfix/*
  || $GITHUB_BRANCH == master
  || $GITHUB_BRANCH == support/* ]]
then
  npx testcafe "browserstack:ie@11.0,browserstack:safari" --config-file ./.circleci/testcafe.json -q
else
  npx testcafe -c 2 "browserstack:ie@11.0" --config-file ./.circleci/testcafe.json -q
fi
