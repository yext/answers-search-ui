#!/bin/bash

if [[ $CIRCLE_BRANCH == release/*
  || $CIRCLE_BRANCH == hotfix/*
  || $CIRCLE_BRANCH == master
  || $CIRCLE_BRANCH == support/* ]]
then
  npx testcafe -c 3 "chrome:headless,firefox:headless" --config-file ./.circleci/testcafe.json -q
else
  npx testcafe -c 3 "chrome:headless" --config-file ./.circleci/testcafe.json -q
fi
