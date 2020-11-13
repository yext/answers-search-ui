# This is run before a publish using `npm publish`
# We want to switch out the current (GitHub) README
# with the short README we have for NPM.

mv ./README.md ./README.tmp
cp ./conf/npm/README.md ./README.md
