interface UserProperties {
  userId: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: boolean;
  email: string;
  tall: number;
}

interface IUser {
  fullname: string;
  update(): void;
  delete(): void;
  reconstitute(): void;
}

class User implements IUser, UserProperties {
  userId: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: boolean;
  email: string;
  tall: number;
  fullname: string;

  //constructor(userId: string, firstname: string, lastname: string, age: number, gender: boolean, email: string, tall: number) {
  constructor(props: UserProperties) {
    //Object.assign({active: true, lastname: "Ortega"}, {name: "Sergio", lastname: "Hidalgo"}) // {active: true, name: "Sergio", lastname: "Hidalgo"}
    Object.assign(this, props);
    /*this.userId = props.userId
        this.firstname = props.firstname
        this.lastname = props.lastname
        this.age = props.age
        this.gender = props.gender
        this.email = props.email
        this.tall = props.tall*/
    this.fullname = `${props.firstname} ${props.lastname}`;
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
  reconstitute(): void {
    throw new Error("Method not implemented.");
  }
}
const props: UserProperties = {
  userId: "f7886175-e16d-4083-807b-e0a413b7d0f5",
  firstname: "Marta",
  lastname: "López",
  age: 20,
  email: "marta@correo.com",
  tall: 175,
  gender: false,
};
//const user = new User("f7886175-e16d-4083-807b-e0a413b7d0f5", "Marta", "López", 20, false, "marta@correo.com", 175)
const user = new User(props);
