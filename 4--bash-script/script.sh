#!/usr/bin/env bash

echo 'Syncing /src to /dist...';

rsync -r --exclude-from=./src/.distignore ./src/ ./dist;

echo "Here's what's in /dist...";

cd dist && ls -al;

echo '... done!';