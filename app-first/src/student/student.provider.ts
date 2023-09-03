import { StudentRepository } from './student.interface';

export class StudentProvider01 implements StudentRepository {
  getValue(): number[] {
    return [1, 2, 3];
  }
}
