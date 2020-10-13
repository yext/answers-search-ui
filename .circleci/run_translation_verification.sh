#!/bin/bash

npm run extract-translations

cd conf/i18n/translations

for po_file in *.po
  do msgcmp $po_file messages.pot
done