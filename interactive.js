const inquirer = require('inquirer');
const shell = require('shelljs')

//PUT THEM IN REVERSE ORDER BECAUSE OF THE INVERSED WHILE LATER

const react = [
    "react-dom",
    "react-draggable",
    "react-i18next",
    "react-router",
    "mobx-react",
    "mobx",
    "axios",
    "i18next-xhr-backend",
    "i18next",
    "react"
]

const angular = [
    "angular-translate-loader-static-files",
    "angular-translate",
    "angular-ui-bootstrap",
    "angular-ui-router",
    "oclazyload",
    "angular"
]

inquirer.prompt(
    [
        /* Pass your questions in here */
        {
            type: "list",
            name: "js",
            message: "What to install ?",
            choices: [
                "React",
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
            case "React":
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
                cmd += "yarn add "
            cmd += libs[i] + " "
            i--
        }
        console.log(cmd)
        shell.exec(cmd)
        shell.exec('mv react src')
        //shell.exec('rm -rf ' + answers.js)
    }
);