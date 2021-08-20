#!/bin/bash

npx testcafe -c 3 "chrome:headless,firefox:headless" --config-file ./.circleci/testcafe_search_bar.json -q