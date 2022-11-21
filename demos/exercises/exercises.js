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
 
 promote(newJobTitle, newpayRate) {
    this.newJobTitle;
    this.newPayRate ;
 }
 getintro(){
    return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.JobTitle}.`
 }
}

let employee = new Employee(
       1,
      "Brian",
      "Bell", 
     "software Dev",
       100000000);
       console.log(employee.getFullName());

       let intro = employee.getIntro();
       console.log(intro);
       