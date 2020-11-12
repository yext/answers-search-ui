# This is run after a publish using `npm publish`
# We want to undo the changes done by the prepublish

mv ./README.tmp ./README.md
