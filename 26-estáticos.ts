class Database {
  static protocol = "http";
  typeDatabase = "mysql";

  static getConnectionString(
    host: string,
    username: string,
    password: string,
    schema: string
  ) {
    return `${this.protocol}://${host}/${username}/${password}/${schema}`;
  }

  getProtocol() {
    return Database.protocol;
  }
}

console.log(Database.protocol);
console.log(
  Database.getConnectionString("localhost:3306", "root", "12345", "digital")
);

const database = new Database();
console.log(database.getProtocol());
console.log(database.typeDatabase);
