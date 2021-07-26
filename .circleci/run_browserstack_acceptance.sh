#!/bin/bash
export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_PROJECT_NAME="Answers SDK"
export BROWSERSTACK_BUILD_ID="${CIRCLE_BRANCH} - ${CIRCLE_BUILD_NUM}"
COMMIT_MSG_TITLE=$(git log -n 1 --pretty=format:%s)
export BROWSERSTACK_TEST_RUN_NAME=$COMMIT_MSG_TITLE
hardcodeBranch='hotfix/some-test'

if [[ $hardcodeBranch == release/*
  || $hardcodeBranch == hotfix/*
  || $hardcodeBranch == master
  || $hardcodeBranch == support* ]]
then
  npm run acceptance -- --browsers browserstack:ie@11.0 browserstack:safari browserstack:firefox browserstack:chrome
else
  npm run acceptance -- --browsers browserstack:ie@11.0 browserstack:chrome --concurrency 2
fi