const inquirer = require('inquirer');
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const buildSite = require('./src/build-site');
const fs = require("fs");
const path = require("path");
const Employee = require('./lib/employee');
const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputPath = path.join(OUTPUT_DIR, "teamprofile.html")
const teamMembers = [];

const managerInput = ()=> {
    return inquirer.prompt ([
       {
        type: 'input',
        name: "empName",
        message: 'What is your Full Name?* :' ,
        validate: empName => {
            if (empName) {
                return true;
            } else {
                console.log('Please try again, enter your name:')
            }
        }
    },
       
        {
            type: 'input',
            name: "employeeid",
            message: 'Your employee id?  *: ',
            validate: employeeid => {
            if (employeeid) {
                return true;
            } else {
                console.log('Please try again, enter your employee ID:')
            }
            }
        },
        {
            type: 'input',
            name: "empEmail",
            message: 'Your email please  *: ',
            validate: empEmail => {
            if (empEmail) {
                return true;
            } else {
                console.log('Please try again, enter your email:')
            }
            }
        },

        {
            type: 'input',
            name: "officenumber",
            message: 'Enter your office Number *: ',
            validate: officenumber => {
            if (officenumber) {
                return true;
            } else {
                console.log('Please try again, enter your office number:')
            }
            }
        }

    ])
    .then ((answers) => {
        console.log(answers)
        const manager = new Manager(answers.empName, answers.employeeid, answers.empEmail, answers.officenumber );
        teamMembers.push(manager)
        optionMenu();
    })

}

const optionMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'empType',
            message: 'Please select an option below:',
            choices: ['Add an Intern', 'Add an Engineer', 'Done with team members']

        }
    ])
    .then(userSelected => {
        switch (userSelected.empType) {
            case "Add an Intern":
                internInput();
                break;
            case "Add an Engineer":
                engineerInput();
                break;
            default:
                buildTeam();
            
        }
    })

}

// ************* Intern Input Area ********
const internInput =() => {
    console.log('Enter new intern information below');

    return inquirer.prompt ([
        {
            type: 'input',
            name: "empName",
            message: 'What is your Full Name?* :' ,
            validate: empName => {
                if (empName) {
                    return true;
                } else {
                    console.log('Please try again, enter your name:')
                }
            }
         },
            
            {
                type: 'input',
                name: "employeeid",
                message: 'Your employee id?  *: ',
                validate: employeeid => {
                if (employeeid) {
                    return true;
                } else {
                    console.log('Please try again, enter your employee ID:')
                }
                }
            },
            {
                type: 'input',
                name: "empEmail",
                message: 'Your email please  *: ',
                validate: empEmail => {
                if (empEmail) {
                    return true;
                } else {
                    console.log('Please try again, enter your email:')
                }
                }
            },
     
             {
                 type: 'input',
                 name: "schoolname",
                 message: 'Enter your school *: ',
                 validate: schoolname => {
                 if (schoolname) {
                     return true;
                 } else {
                     console.log('Please try again, enter your school name:')
                 }
                 }
             }
     
         ])
         .then ((answers) => {
             console.log(answers)
             const intern = new Intern(answers.empName, answers.employeeid, answers.empEmail, answers.schoolname );
             teamMembers.push(intern)
             optionMenu();
         })

}

// ***** Enginner input section *****

const engineerInput =() => {
    console.log('Enter new engineer information below');

    return inquirer.prompt ([
        {
            type: 'input',
            name: "empName",
            message: 'What is your Full Name?* :' ,
            validate: empName => {
                if (empName) {
                    return true;
                } else {
                    console.log('Please try again, enter your name:')
                }
            }
         },
            
            {
                type: 'input',
                name: "employeeid",
                message: 'Your employee id?  *: ',
                validate: employeeid => {
                if (employeeid) {
                    return true;
                } else {
                    console.log('Please try again, enter your employee ID:')
                }
                }
            },
            {
                type: 'input',
                name: "empEmail",
                message: 'Your email please  *: ',
                validate: empEmail => {
                if (empEmail) {
                    return true;
                } else {
                    console.log('Please try again, enter your email:')
                }
                }
            },
     
             {
                 type: 'input',
                 name: "githubaccount",
                 message: 'Enter your Github Account  *: ',
                 validate: githubaccount => {
                 if (githubaccount) {
                     return true;
                 } else {
                     console.log('Please try again, enter your github Account:')
                 }
                 }
             }
     
         ])
         .then ((answers) => {
             console.log(answers)
             const engineer = new Engineer(answers.empName, answers.employeeid, answers.empEmail, answers.githubaccount );
             teamMembers.push(engineer);
             optionMenu();
         })

}

const buildTeam = () => {
    console.log("Done building the team !!");

    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }

    fs.writeFileSync(outputPath, buildSite(teamMembers), "utf-8");

}
managerInput();