const Manager = require('../lib/manager');
const manager = new Manager('Roodolph', '9175971649', 'roodysenecal@gmail.com', '212-434-9090');

it('would create a new manager object' , () => {
    expect(manager.name).toBe('Roodolph');
    expect(manager.id).toBe('9175971649');
    expect(manager.email).toBe('roodysenecal@gmail.com')
    expect(manager.officeNumber).toBe('212-434-9090')

});

it('getName() should return the employee Name',() => {
    expect(manager.getName()).toBe('Roodolph');
});

it('getId() should return the employee ID',() => {
    expect(manager.getId()).toBe('9175971649');
});

it('getEmail() should return the employee Email',() => {
    expect(manager.getEmail()).toBe('roodysenecal@gmail.com');
});

it('getOfficeNumber should return the employee Email',() => {
    expect(manager.getEmail()).toBe('roodysenecal@gmail.com');
});

it('getRole() should return the Manager',() => {
    expect(manager.getRole()).toBe('Manager');
});