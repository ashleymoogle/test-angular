## Test angularjs

###Installation
```
npm install
```

###How to run the app

```
npm start
```
Then go to the url provided

```
npm build
```
For manual webpack build

Alternatively you can also use html script tags to include deps and run the app in local or with another web server.

This sample app use john papa's best practices in ES6 : https://github.com/rwwagner90/angular-styleguide-es6

## Tests :
### Easy :
- Fix the App
- Add 2 more views and display random stuff in them
- Add a menu to switch between views

### Medium :
- Make use of externals api :
    - Make an app with a user view (you can fetch your users here : https://jsonplaceholder.typicode.com/users)
    - Each user will be displayed in a list with their firstname and lastname only
    - You can click on a user to display more informations
    - Add a "Photos" view with a wall of pictures (https://jsonplaceholder.typicode.com/photos)
    
### Hard :
- You can edit a user and delete a photo
- Everything is in ES6
- Use most of the best practices
- Use promises
- Found a nice way to do the css

### Very Hard :
- Eye-candy
- Tweak webpack
- App is fully responsive
- App is fully optimized (api calls AND ressources call)
- App is fully documented

### Insane :
- App has Unit testing
- App has behaviour testing

### Absolute DOOM :
- Fuck angular, you did everything but with React, and Redux, why not ?
- And you did everything with experimental apis and JS methods from ES7+
    