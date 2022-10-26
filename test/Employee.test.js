const Employee = require('../lib/employee');
const employee = new Employee('Roodolph', '9175971649', 'roodysenecal@gmail.com');

it('would create a new employee object' , () => {
    expect(employee.name).toBe('Roodolph');
    expect(employee.id).toBe('9175971649');
    expect(employee.email).toBe('roodysenecal@gmail.com')

});

it('getName() should return the employee Name',() => {
    expect(employee.getName()).toBe('Roodolph');
});

it('getId() should return the employee ID',() => {
    expect(employee.getId()).toBe('9175971649');
});

it('getEmail() should return the employee Email',() => {
    expect(employee.getEmail()).toBe('roodysenecal@gmail.com');
});

it('getRole() should return the employee',() => {
    expect(employee.getRole()).toBe('Employee');
});

