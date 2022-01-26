#!/bin/bash

npx testcafe chrome:headless,firefox:headless,browserstack:safari,browserstack:edge tests/acceptance/useragent/useragentsuite.js --config-file ./.circleci/testcafe.json
