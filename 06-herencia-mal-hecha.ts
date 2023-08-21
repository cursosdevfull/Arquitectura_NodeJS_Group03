class UserInformationPersonal {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class UserSalary extends UserInformationPersonal {
  salary: number;

  constructor(firstname: string, lastname: string, salary: number) {
    super(firstname, lastname);
    this.salary = salary;
  }
}

const userSalary = new UserSalary("Carla", "Loayza", 14000);
console.log(userSalary);
