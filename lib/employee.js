const inquirer = require('inquirer');

class Employee {

    constructor(name, id, email ){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role ="Employee";
    }
    getId() {
        inquirer
            .prompt ({
                message: 'Enter Employee id: ',
                type: 'input',
                name: 'empId',
            })
            .then((answer) => (this.id =answer.empId));
    }

    getName() {
        inquirer
            .prompt({
                message: 'Enter Employee Name: ',
                type: 'input',
                name: 'empName',
            })
            .then((answer) => (this.name =answer.empName));
    }

    getEmail() {
        inquirer
            .prompt({
                message: 'Enter Employee Email: ',
                type: 'input',
                name: 'empEmail',
            })
            .then((answer) => (this.email =answer.empEmail));
    }

    getRole() {
        this.role = "Employee"
    }


}

