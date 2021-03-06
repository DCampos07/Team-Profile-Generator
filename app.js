const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
//const jest = require('jest');

//Class Files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require('./src/page-template.js');
const teamMembers = [];
const idArray = [];

//const { functionTypeAnnotation } = require('@babel/types');


function appMenu () {
    
    const addManager = () => {
        console.log("Let's create your super team");
        return inquirer.prompt([
    
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            },
        ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        generateTeam();
        });
    }
  
    const generateTeam = () =>{
        
        inquirer.prompt ([{
            type: "list",
            name: "memberChoice",
            message: "Would you like to add any additional team members?",
            choices: ["Engineer", "Intern", "No further members to add"]
        }
        ]).then(userchoice => {
            switch (userchoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }          
        });
    }

    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id number?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's Github link?",
            },

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            generateTeam();
            });
    }

    const addIntern = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's id number?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school?",
            },

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            generateTeam();
    });
    }
//Takes above information into the HTML
    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
          }
          fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    addManager();
}

appMenu();