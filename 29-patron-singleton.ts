class Database {
  private host: string;
  private username: string;
  private password: string;

  private static instance: Database;

  private constructor(host: string, username: string, password: string) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  static create(host: string, username: string, password: string): Database {
    if (!this.instance) this.instance = new Database(host, username, password);

    return this.instance;
  }

  properties() {
    return {
      host: this.host,
      username: this.username,
      password: this.password,
    };
  }
}

//const database = new Database()
const database = Database.create("192.189.15.1", "root", "12345");
const database2 = Database.create("localhost", "user", "dios");

console.log("database", database.properties());
console.log("database2", database2.properties());
