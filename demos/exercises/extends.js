class Person {
    constuctor(firstName, lastName,) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName() {
        return this.firstName + "" + this.lastName;
     }
}

let Person = new Person (
    "Brian",
    "Bell"
);
 console.log(person.FullName());

 class Employee extends Person {
    constuctor ( firstName, lastName, iD, jobTitle,payRate) {
        super(firstName, lastName)
        this.id = id
        this.jobTitle = jobTitle
        this.payRate = payRate
    }
 }

 let employee = new Employee ("Brian", "Bell", 32,  "software dev", 2000000);
 console.log(employee.getFullName())