const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name, id, email, githubName){
        super(name, id, email);
    }

    getGithub() {
        return this.githubName;
    }


    getRole() {
        this.role = "Engineer"
    }
}

module.exports = Engineer;