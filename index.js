const employee = {
    name : "Maddie Hawelu",
    streetAddress: "1313 Perth Ct, Concord, CA 94521"
};

function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    const newEmployee = {...employee};
    newEmployee[streetAddress] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const updatedEmployee = {...employee[name]};
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}
