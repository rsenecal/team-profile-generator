const inquirer = require('inquirer');

inquirer

    .prompt([
        {
            type: 'input',
            message: "Employee Name",
            name: 'empName',
        },
        {
            type: 'input',
            message: "Employee ID ",
            name: 'empID',
        },
        {
            type: 'input',
            message: "Employee Email ",
            name: 'empEmail',
        },

    ])
    console.log( `My name is ${this.name}`);
