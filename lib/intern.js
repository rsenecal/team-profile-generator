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

    getSchool () {
        console.log(`My School name is  ${this.school}`);
    }
}