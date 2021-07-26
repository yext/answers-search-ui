#!/bin/bash
if [[ $CIRCLE_BRANCH == release/*
  || $CIRCLE_BRANCH == hotfix/*
  || $CIRCLE_BRANCH == master
  || $CIRCLE_BRANCH == support* ]]
then
  npx testcafe -c 3 "chrome:headless,firefox:headless" tests/acceptance/acceptancesuites/*.js \
  -q --app "npx serve -l tcp://0.0.0.0:9999" --app-init-delay 4000
else
  npx testcafe -c 3 "chrome:headless" tests/acceptance/acceptancesuites/*.js \
  -q --app "npx serve -l tcp://0.0.0.0:9999" --app-init-delay 4000
fi