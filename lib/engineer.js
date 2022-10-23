const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name, id, email, githubName){
        super();
        this.role = "Engineer";
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubName = githubName;
    }

    getGithub () {
        console.log(`My Git hub Account ${this.githubName}`);
    }
}