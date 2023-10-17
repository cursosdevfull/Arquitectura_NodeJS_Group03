import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthMemory, User } from './auth.memory';

export class AuthInfrastructure implements AuthRepository {
  async getUserByEmail(email: string): Promise<User> {
    const userFound = AuthMemory.getUserByEmail(email);
    return Promise.resolve(userFound);
  }
}
