#!/bin/bash

if [[ $GITHUB_REF_NAME == release/*
  || $GITHUB_REF_NAME == hotfix/*
  || $GITHUB_REF_NAME == master
  || $GITHUB_REF_NAME == support/* ]]
then
  echo "inside the if"
  npx testcafe -c 3 "chrome:headless,firefox:headless" --config-file ./.github/testcafe.json -q
else
  echo "inside the else"
  npx testcafe -c 3 "chrome:headless" --config-file ./.github/testcafe.json -q
fi
