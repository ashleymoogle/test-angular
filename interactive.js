const inquirer = require('inquirer');
const shell = require('shelljs')

//PUT THEM IN REVERSE ORDER BECAUSE OF THE INVERSED WHILE LATER

const react = [
    "react-test-renderer --save-dev",
    "babel-jest --save-dev",
    "jest --save-dev",
    "react-dom --save",
    "react-draggable --save",
    "react-i18next --save",
    "react-router --save",
    "mobx-react --save",
    "mobx --save",
    "axios --save",
    "i18next-xhr-backend --save",
    "i18next --save",
    "react --save"
]

const angular = [
    "angular-mocks --save-dev",
    "angular-translate-loader-static-files --save",
    "angular-translate --save",
    "angular-ui-bootstrap --save",
    "angular-route --save",
    "angular-ui-router --save",
    "oclazyload --save",
    "angular --save"
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
                "angular",
                new inquirer.Separator(),
                "Both"
            ]
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        let libs
        let cmd = ""
        switch (answers.js) {
            case "react":
                libs = react
                break
            case "angular":
                libs = angular
                break
            default:
                libs = react.concat(angular)
        }
        let i = libs.length-1
        while(i >= 0){
            if(i === libs.length -1)
                //Fucking yarn crash with shelljs, fallback on npm
                cmd += "npm install "
            cmd += libs[i] + " "
            i--
        }
        console.log(cmd)
        //shell.exec('rm -r yarn.lock')
        shell.exec(cmd)
        shell.exec('mv '+ answers.js +' src')
        //shell.exec('rm -rf ' + answers.js)
    }
);