//Create a program that manages employees.
//Define interfaces for employees with properties like name, age, salary, etc.
//Implement functions to add new employees, remove employees, update employee details, and calculate total payroll.


interface Employee{
    name:string;
    age:number;
    position:string;
}

interface Workplace{
    employees:Employee[]
}

function addEmployee(office:Workplace, NewEmployee:Employee):void{
    office.employees.push(NewEmployee)
}

function removeEmployee(office:Workplace, employeeName:string):void{
    office.employees = office.employees.filter((emp) => emp.name !== employeeName)
}

function updateDetails(office:Workplace , employeeName:string , NewPosition:string ):void{
    var employee = office.employees.find(employee => employee.name === employeeName);
    if (employee){
        employee.position = NewPosition
    } 
}

var Organization:Workplace ={
    employees:[
        {name:'Abdul' , age: 22 , position: 'Intern'}
    ]
}

addEmployee(Organization, {name:'' , age:22 , position:''})

console.log(Organization)