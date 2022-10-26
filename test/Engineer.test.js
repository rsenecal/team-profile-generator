const Engineer = require('../lib/engineer');
const engineer = new Engineer('Roodolph', '9175971649', 'roodysenecal@gmail.com', 'roody@github.com');

it('would create a new manager object' , () => {
    expect(engineer.name).toBe('Roodolph');
    expect(engineer.id).toBe('9175971649');
    expect(engineer.email).toBe('roodysenecal@gmail.com')
    expect(engineer.githubName).toBe('roody@github.com')

});

it('getName() should return the employee Name',() => {
    expect(engineer.getName()).toBe('Roodolph');
});

it('getId() should return the employee ID',() => {
    expect(engineer.getId()).toBe('9175971649');
});

it('getEmail() should return the Engineer Email',() => {
    expect(engineer.getEmail()).toBe('roodysenecal@gmail.com');
});

it('getSchool() should return the engineer School',() => {
    expect(engineer.getGithub()).toBe('roody@github.com');
});

it('getRole() should return Engineer',() => {
    expect(engineer.getRole()).toBe('Engineer');
});