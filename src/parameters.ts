export class Parameters {
  static get PORT() {
    return process.env.NODE_ENV === 'production'
      ? 80
      : parseInt(process.env.PORT);
  }
}
