# Dota ProTracker

## Deploy to GitHub
```
$ git checkout -b gh-pages
$ git push origin gh-pages
$ npm install -g angular-cli-ghpages
$ ng build --configuration production --base-href https://her3tiq.github.io/dota_pro_tracker/
$ ngh --dir=dist/dota_pro_tracker
```

** You only need to set the “--base-href” flag once, next time you make changes and build the project you can simply run:
```
$ ng build --prod
```
