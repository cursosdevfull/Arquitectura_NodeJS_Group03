import { User } from '../../infrastructure/auth.memory';

export interface AuthRepository {
  getUserByEmail(email: string): Promise<User>;
}
