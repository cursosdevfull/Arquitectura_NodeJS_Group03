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

  constructor(info: UserInformationPersonal, salary: number) {
    this.info = info;
    this.salary = salary;
  }
}

const information = new UserInformationPersonal("Carla", "Loayza");
const userSalary = new UserSalary(information, 14000);
console.log(userSalary);
