class User {
  private readonly userId = "f2eec783-86ae-4206-bc81-0bfb65b00e86";
  protected readonly password = "tBbz36Sk5&5S";
}

class Developer extends User {
  getPasswordLength() {
    return this.password.length;
  }

  getUserId() {
    return this.userId;
  }
}

class DeveloperCloud extends Developer {
  constructor() {
    super();
    console.log(this.password);
  }
}

const user = new User();
console.log("user", user);
console.log(user.password);
const developer = new Developer();
console.log(developer.password);
const developerCloud = new DeveloperCloud();
console.log(developerCloud.password);
