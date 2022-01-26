#!/bin/bash

if [[ $GITHUB_REF_NAME == release/*
  || $GITHUB_REF_NAME == hotfix/*
  || $GITHUB_REF_NAME == master
  || $GITHUB_REF_NAME == support/* ]]
then
  npx testcafe "browserstack:ie@11.0,browserstack:safari" --config-file ./.circleci/testcafe.json -q
else
  npx testcafe -c 2 "browserstack:ie@11.0" --config-file ./.circleci/testcafe.json -q
fi
