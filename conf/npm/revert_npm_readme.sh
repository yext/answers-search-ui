# This is run after a publish using `npm publish`
# We want to undo the changes done by use_npm_readme.sh

mv ./README.tmp ./README.md
