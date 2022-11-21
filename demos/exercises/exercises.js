class Emploee {
  constuctor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle
    this.payRate = payRate;
  }
  getFullName(){
    return this.firstName + "" + this.lastName;
 }
}

let employee = new Employee(
       1,
      "Brian",
      "Bell", 
     "software Dev",
       100000000);
       console.log(employee.getFullName());

       