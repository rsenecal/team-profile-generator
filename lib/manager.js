const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, id, email, officeNmber){
        super();
        this.role = "Manager";
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNmber = officeNmber;
    }

    getOfficeNumber() {
        inquirer
            .prompt ({
                message: 'Office phone number: ',
                type: 'input',
                name: 'empOfficeNumber',
            })
            .then((answer) => (this.officeNmber =answer.empOfficeNmber));
    }


    getRole() {
        this.role = "Manager"
    }

}