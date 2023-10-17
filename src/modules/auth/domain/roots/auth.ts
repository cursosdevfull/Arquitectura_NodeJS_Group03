export type AuthProps = {
  readonly email: string;
  readonly password: string;
};

export class Auth {
  private readonly email: string;
  private readonly password: string;

  constructor(props: AuthProps) {
    this.email = props.email;
    this.password = props.password;
  }

  properties() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
