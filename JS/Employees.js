"use strict";
//Create a program that manages employees.
//Define interfaces for employees with properties like name, age, salary, etc.
//Implement functions to add new employees, remove employees, update employee details, and calculate total payroll.
function addEmployee(office, NewEmployee) {
    office.employees.push(NewEmployee);
}
function removeEmployee(office, employeeName) {
    office.employees = office.employees.filter((emp) => emp.name !== employeeName);
}
function updateDetails(office, employeeName, NewPosition) {
    var employee = office.employees.find(employee => employee.name === employeeName);
    if (employee) {
        employee.position = NewPosition;
    }
}
var Organization = {
    employees: [
        { name: 'Abdul', age: 22, position: 'Intern' }
    ]
};
addEmployee(Organization, { name: '', age: 22, position: '' });
console.log(Organization);
