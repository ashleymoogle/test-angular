## Starter Kit for quick prototyping with your favorite framework :)
All included : from package download with yarn to build with webpack 2.
You can choose your framework between React and Angular. A sample app in avaliable for each one with all basic needs : routes, structure, translations, flux...
With a few commands you're ready to code with all the latest stuff without all the hassle of configuring everything.
Enjoy :)

*Inquirer doesnt work very well with git bash terminals on windows. Consider using powershell.
*If your node is not up to date and yarn asks you a recent version, edit the scripts in package.json by adding --ignore-engines after each yarn command.

####Start with
```
npm run super-install
```

It's going to install yarn (global) and some packages, including a ton of webpack stuff.

Choose between React or Angular and let it install a full set of useful libs for your chosen framework !

```
yarn run build
```
for production build

```
yarn start
```
to init server AND watch (with hot module replacement)

```
yarn run watch
```
to watch code

##TODO :
- Batter starting app angular
- Both side
- Unit testing (karma, phantomjs, jasmine)
- Choose css framework (less ? sass ?)
- Better install


#Changelog :
##0.2
- Webpack 2
- App react upgraded : css included and one more component with a few examples to help start
- reverted to npm install from yarn add because of unknown and disturbing error (watch you package.json in case libs are not registered in dependencies. You can find them in consts in interactive.js)
-
