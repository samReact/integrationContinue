echo "{ \"alias\": \"$TRAVIS_BRANCH\" }" > now-review-app.json
now --public --token $NOW_TOKEN
now alias --token $NOW_TOKEN --local-config now-review-app.json