## Test angularjs

First clone the repo and use
```
git remote set-url origin <YOUR_REPO>
```
Or you can make me a pull request

### Installation
```
npm install
```

### How to run the app

```
npm start
```
Then go to the url provided

```
npm build
```
For manual build

Alternatively you can also use html script tags to include dependencies and run the app in local or with another web server.

This sample app use john papa's best practices in ES6 : https://github.com/rwwagner90/angular-styleguide-es6

## Tests :
You don't have to do everything, go as far as you can.
When you're done, kill the web server and type 
```
npm build
```
To generate a clean build.

### Easy :
- Fix the App : it should add items correctly
- Add 2 more views and display random stuff in them
- Add a menu to switch between views

### Medium :
- Make use of externals api and data-binding:
    - Add a "Users" view (you can fetch your users here : https://jsonplaceholder.typicode.com/users)
    - Each user will be displayed in a list with their firstname, lastname, company name and email only
    - You can click on a user to display all their informations
    - Add a "Photos" view with a wall of pictures (https://jsonplaceholder.typicode.com/photos)
    - Add a "Posts" view with all posts displayed (https://jsonplaceholder.typicode.com/posts)
- Add a button to order users by name
- Add a button to order users by company name
- Add a button to order users by email
- Filter photos by album
    
### Hard :
- Make an album view with all albums, each redirect to a wall of its own pictures
- Add a searchbar on the user view that filters the users
- You can add, edit and delete a post, a user and a photo
- Everything is in ES6
- Use most of the best practices
- Use promises
- Find a nice way to do the css
- Deleting or editing an album changes the photos view too

### Very Hard :
- App is fully optimized (api calls AND ressources call)
- Eye-candy
- App is fully responsive
- Tweak webpack for your needs
- App is deployed on a server
- App is fully documented

### Insane :
- App has Unit testing
- App has behaviour testing

### Absolute DOOM :
- F*** angular, you did everything but with React, and Redux, why not ?
- You did everything with experimental apis and JS methods from ES7+
    
This test repo is made with my starter kit js, tweaked a little : https://github.com/ashleymoogle/starter-kit-js