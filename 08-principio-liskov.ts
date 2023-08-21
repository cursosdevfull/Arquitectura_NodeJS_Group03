class Person {
  firstname: string;
  lastname: string;
  age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  properties() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
    };
  }
}

class Adult extends Person {
  license: string;

  constructor(
    firstname: string,
    lastname: string,
    age: number,
    license: string
  ) {
    super(firstname, lastname, age);
    this.license = license;
  }

  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  properties() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      license: this.license,
    };
  }
}

const adult: Person = new Adult("Marisol", "Luz", 30, "abc-123");
console.log(adult.properties());
