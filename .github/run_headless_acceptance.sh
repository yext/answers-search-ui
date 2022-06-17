#!/bin/bash

npx testcafe -c 3 "chrome:headless,firefox:headless" --config-file ./.github/testcafe.json -q
