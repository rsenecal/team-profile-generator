const Intern = require('../lib/intern');
const intern = new Intern('Roodolph', '9175971649', 'roodysenecal@gmail.com', 'Poly');

it('would create a new manager object' , () => {
    expect(intern.name).toBe('Roodolph');
    expect(intern.id).toBe('9175971649');
    expect(intern.email).toBe('roodysenecal@gmail.com')
    expect(intern.school).toBe('Poly')

});

it('getName() should return the employee Name',() => {
    expect(intern.getName()).toBe('Roodolph');
});

it('getId() should return the employee ID',() => {
    expect(intern.getId()).toBe('9175971649');
});

it('getEmail() should return the employee Email',() => {
    expect(intern.getEmail()).toBe('roodysenecal@gmail.com');
});

it('getSchool() should return the Intern School',() => {
    expect(intern.getSchool()).toBe('Poly');
});

it('getRole() should return the Manager',() => {
    expect(intern.getRole()).toBe('Intern');
});