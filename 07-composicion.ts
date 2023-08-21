class UserInformationPersonal {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class UserSalary {
  salary: number;
  info: UserInformationPersonal;

  constructor(firstname: string, lastname: string, salary: number) {
    this.info = new UserInformationPersonal(firstname, lastname);
    this.salary = salary;
  }
}

const userSalary = new UserSalary("Carla", "Loayza", 14000);
console.log(userSalary);
