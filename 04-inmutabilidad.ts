class User {
  readonly userId: number;
  readonly email: string;
  name: string;
  password: string;
  age: number;
  createdAt: Date;
  updatedAt: Date | null = null;
  deletedAt?: Date;

  constructor(email: string, name: string, age: number, password: string) {
    this.userId = Math.ceil(Math.random() * 10000 + 1);
    this.email = email;
    this.name = name;
    this.age = age;
    this.password = password;
    this.createdAt = new Date();
  }

  update() {
    //this.userId = Math.ceil(Math.random()*10000 +1)
  }
}

const user = new User("sergio@correo.com", "Sergio", 20, "12345");
console.log(user);
user.update();
console.log(user);
