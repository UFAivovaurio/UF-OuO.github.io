set -e

yarn build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:UFAivovaurio/UF-OuO.github.io.git master:blogs

cd -
