## BOILERPLATE
Inquirer doesnt work very well with git bash terminals on windows. Consider using powershell.

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
webpack --watch
```
to watch code

##TODO :
- Both side
- Unit testing (karma, phantomjs, jasmine)
- Choose css framework
- Webpack 2
- Better install
