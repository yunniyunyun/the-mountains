#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://yunniyunyun.github.io
# git push -f git@github.com:yunniyunyun/yunniyunyun.github.io.git main

# if you are deploying to https://yunniyunyun.github.io/vite-deploy-sample
# git push -f git@github.com:yunniyunyun/vite-deploy-sample.git main:gh-pages
git push -f https://github.com/yunniyunyun/vue-hw-6.git main:gh-pages

cd -