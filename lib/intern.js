const Employee = require('./employee');

// class Engineer extends Employee {

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        // this.role = "Engineer"
        return "Intern"
    }
}

module.exports = Intern;