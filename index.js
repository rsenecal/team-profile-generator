const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require("fs");
const path = require("path");
const Employee = require('./lib/employee');
// const teamMembers = [];

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
        // teamMembers.push(manager);
        let mngName = manager.name;
        let mngId = manager.id;
        let mngEmail = manager.email;
        let mngOfficeNumber = manager.officeNumber;
        createManagerSection(mngName, mngId,mngEmail,mngOfficeNumber);
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
                createFooterSection ();
            
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
            //  teamMembers.push(intern)
             let intName = intern.name;
             let intId = intern.id;
             let intEmail = intern.email;
             let intSchool = intern.school;
             createInternSection(intName, intId,intEmail,intSchool);
     
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
            //  teamMembers.push(engineer);
             let engName = engineer.name;
             let engId = engineer.id;
             let engEmail = engineer.email;
             let engGithub = engineer.githubaccount;
             createEngineerSection(engName, engId,engEmail,engGithub);
             optionMenu();
         })

}


function createManagerSection (name, id, email, officeNumber) 
{
    fs.writeFileSync('teamprofile.html', `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <div class=""container>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <span class="navbar-text">
         <h2> My Team</h2>
        </span>
      </nav>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 15rem;">
                    <div class="card-body">
                        <h5 class="card-title">Employee's Name: ${name} </h5>
                        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Employee ID: ${id}</li>
                            <li class="list-group-item">Email Address: ${email}</li>
                            <li class="list-group-item">Office Number: ${officeNumber} </li>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ul>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>`, 
  function (err){
    if (err) throw err;
   }
   )
}




function createInternSection(name, id, email, school)
{
    fs.appendFile('teamprofile.html',
   `
   <div class="col">
   <div class="card" style="width: 15rem;">
       <div class="card-body">
           <h5 class="card-title">Employee Name: ${name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
           <ul class="list-group list-group-flush">
               <li class="list-group-item">Employee ID: ${id}</li>
               <li class="list-group-item">Email Address: ${email}</li>
               <li class="list-group-item">School: ${school} </li>
           </ul>
       <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
       </div>
   </div>
</div>

    `,
    function (err) {
        if (err) throw err;
    }
    );
}


function createEngineerSection(name, id, email, githubaccount)
{
 
    fs.appendFile('teamprofile.html',
   `
   <div class="col">
   <div class="card" style="width: 15rem;">
       <div class="card-body">
           <h5 class="card-title">Employee Name: ${name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
           <ul class="list-group list-group-flush">clear
               <li class="list-group-item">Employee ID: ${id}</li>
               <li class="list-group-item">Email Address: ${email}</li>
               <li class="list-group-item">School: ${githubaccount} </li>
           </ul>
       <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
       </div>
   </div>
</div>

    `,
    function (err) {
        if (err) throw err;
    }
    );
}

function createFooterSection ()
{
    fs.appendFile('teamprofile.html',
`    
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`,
function (err) {
    if (err) throw err;
}
);

}
managerInput();