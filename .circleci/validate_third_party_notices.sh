#!/bin/bash

# This script verifies that the THIRD-PARTY-NOTICES file is up-to-date

npm run generate-notices -- --output THIRD-PARTY-NOTICES-CURRENT 

diff THIRD-PARTY-NOTICES THIRD-PARTY-NOTICES-CURRENT > /dev/null # send stdout to /dev/null to reduce clutter in the CI output
diff_exit_code=$?

rm THIRD-PARTY-NOTICES-CURRENT

if test $diff_exit_code -eq 1
then
  echo "The THIRD-PARTY-NOTICES files is out of date. Run 'npm run generate-notices' and commit the updated docs."
  exit 1
else
  echo "The THIRD-PARTY-NOTICES file is up to date."
fi