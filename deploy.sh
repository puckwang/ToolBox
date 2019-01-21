#!/bin/sh

echo "# Deleting old publication"
rm -rf dist
mkdir dist
git worktree prune
rm -rf .git/worktrees/dist/

echo "# Checking out public branch into dist"
git worktree add -B dist dist public/master

echo "# Removing existing files"
rm -rf dist/*

echo "# Generating site"
yarn build

echo "# Updating public branch"
echo "tool.puckwang.com" > dist/CNAME

cd public && git add --all && git commit -m "Publishing to github (deploy.sh)"
git push public master
