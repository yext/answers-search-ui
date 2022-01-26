#!/bin/bash

if [[ $GITHUB_BRANCH == release/*
  || $GITHUB_BRANCH == hotfix/*
  || $GITHUB_BRANCH == master
  || $GITHUB_BRANCH == support/* ]]
then
  npx testcafe -c 3 "chrome:headless,firefox:headless" --config-file ./.github/testcafe.json -q
else
  npx testcafe -c 3 "chrome:headless" --config-file ./.github/testcafe.json -q
fi
