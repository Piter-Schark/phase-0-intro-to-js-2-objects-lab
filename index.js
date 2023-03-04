// Write your solution in this file!
const employee = {
    name: "Joe",
    streetAddress: "4833 Reservoir Rd",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Billy Langerhands",
  );

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
  }

  const secondNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Javier");

  function deleteFromEmployeeByKey(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

const thirdNewEmployee = deleteFromEmployeeByKey(
    employee,
    "Sally Yates",
)

delete deleteFromEmployeeByKey.thirdNewEmployee.employee;

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee
}

const fourthNewEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name", "Edu")

delete destructivelyDeleteFromEmployeeByKey.fourthNewEmployee.employee