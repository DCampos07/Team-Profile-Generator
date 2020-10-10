const fs = require('fs');
const markDown = require("./generateHTML");
const inquirer = require('inquirer');
const jest = require('jest');

//Class Files
const inquirer = require("./lib/Employee");
const inquirer = require("./lib/Engineer");
const inquirer = require("./lib/Intern");
const inquirer = require("./lib/Manager");

function promptUser () {
    function promptManager() {
        return inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email on your GitHub account?"
            },
            {
                type: "rawlist",
                name: "title",
                choices: ["Manager", "Engineer","Intern"],
                message: "What is your role in your company?"
            }
        ])}}