echo "{ \"alias\": \"$TRAVIS_REPO_SLUG\"$TRAVIS_REPO_SLUG" }" > now-review-app.json
now --public --token $NOW_TOKEN
now alias --token $NOW_TOKEN --local-config now-review-app.json