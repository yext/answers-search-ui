exit_code=0

for po_file in *.po
  do msgcmp $po_file messages.pot
  exit_code=$(( exit_code + $? ))
done

exit $exit_code
