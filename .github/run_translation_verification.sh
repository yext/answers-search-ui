#!/bin/bash

npm run extract-translations

cd conf/i18n/translations

exit_code=0
if [[ $GITHUB_REF_NAME == release/*
  || $GITHUB_REF_NAME == hotfix/*
  || $GITHUB_REF_NAME == master
  || $GITHUB_REF_NAME == support/* ]]
then
  for po_file in *.po
  do
    msgcmp $po_file messages.pot || exit_code=1
  done
else
  echo "Skipping the verification that all translations are present"
fi

exit $exit_code
