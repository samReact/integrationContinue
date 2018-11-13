git config --global user.email "tifus69@hotmail.com"
git config --global user.name "tifus69"
git checkout $TRAVIS_BRANCH
git remote add github-origin https://tifus69:$GITHUB_API_KEY@github.com/$TRAVIS_REPO_SLUG.git

npm version minor
git push github-origin --follow-tags