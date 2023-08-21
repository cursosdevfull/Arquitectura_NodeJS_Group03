class UserInformationPersonal {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class UserSalary {
  private salary: number = 0;
  private info: UserInformationPersonal;

  constructor(info: UserInformationPersonal) {
    this.info = info;
  }

  set EarnSalary(salary: number) {
    this.salary = salary;
  }

  get ObtSalary() {
    return this.salary;
  }
}

const information = new UserInformationPersonal("Carla", "Loayza");
const userSalary = new UserSalary(information);
userSalary.EarnSalary = 15500;
console.log(userSalary.ObtSalary);
