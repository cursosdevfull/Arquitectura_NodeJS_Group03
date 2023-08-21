class User {
  constructor(
    public firstname: string,
    public lastname: string,
    readonly age: number
  ) {}
}

interface UserRepository {
  insert(user: User): User;
  findAll(): User[];
}

class UserCreated {
  constructor(private repository: UserRepository) {}

  execute(user: User) {
    return this.repository.insert(user);
  }
}

class UserOperation implements UserRepository {
  insert(user: User): User {
    return user;
  }
  findAll(): User[] {
    throw new Error("Method not implemented.");
  }
}

const user = new User("Azucena", "Luna", 26);
const userOperation: UserRepository = new UserOperation();
const userCreated = new UserCreated(userOperation);

console.log(userCreated.execute(user));
