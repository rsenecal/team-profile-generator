const Employee = require('./employee');


class Intern extends Employee {
    constructor(name, id, email, school){
        super();
        this.role = "Intern";
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        inquirer
            .prompt ({
                message: 'Please enter your school: ',
                type: 'input',
                name: 'empSchool',
            })
            .then((answer) => (this.school =answer.empSchool));
    }


    getRole() {
        this.role = "Engineer"
    }
}