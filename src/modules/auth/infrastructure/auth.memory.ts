export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  refreshToken: string;
  roles: string[];
}

export type Users = User[];

export class AuthMemory {
  private static readonly users: Users = [
    {
      id: '25d53987-3a86-49d2-9ce7-9c7405b22c71',
      name: 'User 01',
      email: 'user01@email.com',
      password: '12345',
      refreshToken: '0fe7753a-8ef6-4120-b947-a0c562ade3c7',
      roles: ['ADMIN', 'MEDIC'],
    },

    {
      id: '5e233039-b867-4f33-b700-efe0b5a8bc75',
      name: 'User 02',
      email: 'user02@email.com',
      password: '12345',
      refreshToken: '873221dd-b646-44ef-baad-175e9b9e1de4',
      roles: ['MEDIC'],
    },
  ];

  static getUserByEmail(email: string): User {
    return { ...this.users.find((user) => user.email === email) };
  }
}
