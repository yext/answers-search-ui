#!/bin/bash

if [[ $GITHUB_REF_NAME == release/*
  || $GITHUB_REF_NAME == hotfix/*
  || $GITHUB_REF_NAME == master
  || $GITHUB_REF_NAME == support/* ]]
then
  npx testcafe -c 3 "chrome:headless,firefox:headless" tests/acceptance/acceptancesuites/*.js -q
else
  npx testcafe -c 3 "chrome:headless" tests/acceptance/acceptancesuites/*.js -q
fi
