import { err, ok, Result } from 'neverthrow';

export class StringLengthVO {
  private valueString: string;
  private constructor(value: string) {
    this.valueString = value;
  }

  static create(
    value: string,
    minLength: number,
    maxLength: number,
  ): Result<StringLengthVO, Error> {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
      return err(new Error('Invalid length'));
    } else {
      return ok(new StringLengthVO(value));
    }
  }

  value() {
    return this.valueString;
  }
}
