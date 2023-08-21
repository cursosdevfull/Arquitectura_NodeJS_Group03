interface UserEssentials {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface UserOptionals {
  age: number;
  gender: boolean;
  tall: number;
}

interface IUser {
  fullname: string;
  update(): void;
  delete(): void;
  reconstitute(): void;
}

class User implements IUser, UserEssentials, UserOptionals {
  userId: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: boolean;
  email: string;
  tall: number;
  fullname: string;

  constructor(props: UserEssentials & Partial<UserOptionals>) {
    Object.assign(this, props);
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
const props: UserEssentials & Partial<UserOptionals> = {
  userId: "f7886175-e16d-4083-807b-e0a413b7d0f5",
  firstname: "Marta",
  lastname: "López",
  email: "marta@correo.com",
  age: 43,
};
const user = new User(props);
console.log(user);
