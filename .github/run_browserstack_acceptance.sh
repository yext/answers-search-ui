#!/bin/bash

export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${GITHUB_REF_NAME} - ${GITHUB_RUN_ID} + ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE

if [[ $GITHUB_REF_NAME == release/*
  || $GITHUB_REF_NAME == hotfix/*
  || $GITHUB_REF_NAME == master
  || $GITHUB_REF_NAME == support/* ]]
then
  npx testcafe "browserstack:ie@11.0,browserstack:safari" --config-file ./.github/testcafe.json -q
else
  npx testcafe -c 2 "browserstack:ie@11.0" --config-file ./.github/testcafe.json -q
fi
