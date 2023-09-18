import { validate } from 'uuid';

export class IdVO {
  private id: string;
  private constructor(id: string) {
    this.id = id;
  }

  static create(id: string) {
    if (!validate(id)) {
      throw new Error('Invalid id. Id must be an UUID');
    } else {
      return new IdVO(id);
    }
  }

  value() {
    return this.id;
  }
}
