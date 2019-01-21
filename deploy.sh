#!/bin/sh

echo "# Deleting old publication"
rm -rf dist
mkdir dist
git worktree prune
rm -rf .git/worktrees/gh-pages/

echo "# Checking out public branch into dist"
git worktree add -B gh-pages dist public/gh-pages

echo "# Generating site"
yarn build --no-clean

echo "# Updating public branch"
echo "tool.puckwang.com" > dist/CNAME

cd dist && git add --all && git commit -m "Publishing to github (deploy.sh)"
git push public gh-pages
