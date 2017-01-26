## Starter Kit for quick prototyping with your favorite framework :)
All included : from package download with yarn to build with webpack 2.
You can choose your framework between React and Angular. A sample app in avaliable for each one with all basic needs : routes, structure, translations, flux...
With a few commands you're ready to code with all the latest stuff without all the hassle of configuring everything.
Enjoy :)

*Change the const DEV to true in inquirer.js if you want the dependencies to be saved in your package.json

*Inquirer doesnt work very well with git bash terminals on windows. Consider using powershell.

*If your node is not up to date and yarn asks you a recent version, edit the scripts in package.json by adding --ignore-engines after each yarn command.

####Start with
```
npm run super-install
```

It's going to install yarn (global) and some packages, including a ton of webpack stuff.

Choose between React or Angular and let it install a full set of useful libs for your chosen framework !

*On Git bash windows, the arrows do indeed work, you just don't see it :(

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
- [ ] Web workers ? Webpack magic to regenerate cache from service worker at each build
- [ ] Redux instead of mobX ? (React app working with redux from this starter kit here : https://github.com/ashleymoogle/react-redux-sample)
- [ ] Css modules
- [ ] Ui toolkit
- [ ] Better install, especially on windows


#Changelog : 
https://github.com/ashleymoogle/starter-kit-js/releases