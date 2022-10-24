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

    getGithub() {
        inquirer
            .prompt ({
                message: 'Please enter your Github account name: ',
                type: 'input',
                name: 'empGithubAccount',
            })
            .then((answer) => (this.githubName =answer.empGithubAccount));
    }


    getRole() {
        this.role = "Engineer"
    }
}