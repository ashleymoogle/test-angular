const inquirer = require('inquirer');
const shell = require('shelljs')

//PUT THEM IN REVERSE ORDER BECAUSE OF THE INVERSED WHILE LATER

const DEV = true;

const react = [
    "react-dom",
    "react-i18next",
    "react-router",
    "react-redux",
    "redux",
    "axios",
    "i18next-xhr-backend",
    "i18next",
    "react"
]

const reactDev = [
    "babel-plugin-react-require",
    "react-test-renderer",
    "babel-jest",
    "jest",
    "babel-preset-react",
    "eslint-plugin-react"
]

const angular = [
    "angular-translate-loader-static-files",
    "angular-translate",
    "angular-ui-bootstrap",
    "angular-route",
    "angular-ui-router",
    "oclazyload",
    "angular"
]

const angularDev = [
    "angular-mocks",
    "ng-annotate-loader",
    "ng-annotate-webpack-plugin",
    "phantomjs-prebuilt",
    "karma-webpack",
    "karma-mocha-reporter",
    "karma-mocha",
    "karma-firefox-launcher",
    "karma-chrome-launcher",
    "karma-chai",
    "karma-spec-reporter",
    "karma",
    "chai-as-promised",
    "chai",
    "mocha",
]

inquirer.prompt(
    [
        /* Pass your questions in here */
        {
            type: "list",
            name: "js",
            message: "What to install ?",
            choices: [
                "react",
                new inquirer.Separator(),
                "angular"
            ]
        }
    ])
    .then((answers) => {
            let libs, libsDev, cmd = "", cmdDev = "", pkg = "", pkgDev = ""
            switch (answers.js) {
                case "react":
                    libs = react
                    libsDev = reactDev
                    break
                case "angular":
                    libs = angular
                    libsDev = angularDev
                    break
                default:
                    libs = react.concat(angular)
            }

            //Do we want to write in our package.json ?
            if (!DEV){
                pkg = "-S"
                pkgDev = "-D"
            }

            //install dependencies
            let i = libs.length-1
            while(i >= 0){
                //Fucking yarn crash with shelljs, fallback on npm
                if(i === libs.length -1)
                    cmd += `npm i ${pkg} `
                cmd += libs[i] + " "
                i--
            }

            //install devDependencies
            let j = libsDev.length-1
            while(j >= 0){
                //Fucking yarn crash with shelljs, fallback on npm
                if(j === libsDev.length -1)
                    cmdDev += `npm i ${pkgDev} `
                cmdDev += libsDev[j] + " "
                j--
            }
            console.log(cmd)
            //shell.exec('rm -r yarn.lock')
            shell.exec(cmd)
            console.log(cmdDev
            )
            shell.exec(cmdDev)
            shell.exec('mv '+ answers.js +' src')
            //shell.exec('rm -rf ' + answers.js)
        }
    );