const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, id, email, school){
        super();
        this.role = "Manager";
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNmber = officeNmber;
    }

    getSchool () {
        console.log(`My Office Number is  ${this.school}`);
    }
}