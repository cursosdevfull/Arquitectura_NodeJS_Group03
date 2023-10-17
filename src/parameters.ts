export class Parameters {
  static get PORT() {
    return process.env.NODE_ENV === 'production'
      ? 80
      : parseInt(process.env.PORT);
  }

  static get TOKEN_SECRET() {
    return process.env.TOKEN_SECRET;
  }

  static get TOKEN_EXPIRES() {
    return process.env.TOKEN_EXPIRES;
  }

  static get DB_HOST() {
    return process.env.DB_HOST;
  }

  static get DB_PORT() {
    return Number(process.env.DB_PORT);
  }

  static get DB_USER() {
    return process.env.DB_USER;
  }

  static get DB_PASSWORD() {
    return process.env.DB_PASSWORD;
  }

  static get DB_NAME() {
    return process.env.DB_NAME;
  }

  static get DB_SYNCHRONIZE() {
    return Boolean(process.env.DB_SYNCHRONIZE);
  }

  static get DB_LOGGING() {
    return Boolean(process.env.DB_LOGGING);
  }
}
