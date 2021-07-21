#!/bin/bash

# Verifiy that the messages.pot file in the repo is up to date
# If there are any git diffs after translations are extracted, the checked-in file is out of date

npm run extract-translations

git diff --exit-code > /dev/null # send stdout to /dev/null to reduce clutter in the CI output
diff_exit_code=$?

if test $diff_exit_code -eq 1
then
  echo "Extracted translations are out of date. Run 'npm run extract-translations' and commit the updated pot file."
  exit 1
else
  echo "Extracted translations are up to date"
fi

cd conf/i18n/translations

# Verify that all translations are present
for po_file in *.po
  do msgcmp $po_file messages.pot
done