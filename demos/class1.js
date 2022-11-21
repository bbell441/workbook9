let person = {
  first: "Jarel",
  last: "Wright",
  email: "nottoday@email.com",
};

console.log(person1);
let person2 = { first: "Ari", last: "Black", email: "blackisback@email.com" };

console.log(person2);

class Person {
  //first;
  //last;
  //email;

  constructor(first, last, email) {
    this.first = first;
    this.last = last;
    this.email = email;
  }
  get introduction() {
    return `Hi my name is ${this.first} ${this.last}. You can contact me at: ${this.email}.`;
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }
}

//let person3 = new Person();
// person3.first = "rayna";
//person3.last = "bell"
//person3.email = "raynabell@email.com"

let person3 = new Person("Rayna", "Bell", "ringmybell@email.com");

console.log(person3);
let person4 = new Person("Jarel", "Wright", "idontwanttobewright@email.com");
console.log(person4);
console.log(person4.getIntroduction());
