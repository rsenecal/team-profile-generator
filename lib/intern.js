const Employee = require('../lib/employee');


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        this.role = "Engineer"
    }
}

module.exports = Intern;