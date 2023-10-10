import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

export type IDatabase = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
  logging: boolean;
};

@Injectable()
export class AppService {
  private dataSource: DataSource | void;

  getParametersConnection() {
    const database: IDatabase = {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 3306),
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || '12345',
      database: process.env.DB_NAME || 'db_course',
      synchronize: Boolean(process.env.DB_SYNCHRONIZE || true),
      logging: Boolean(process.env.DB_LOGGING || true),
    };

    return database;
  }

  async onModuleInit() {
    this.dataSource = await new DataSource({
      type: 'mysql',
      ...this.getParametersConnection(),
    })
      .initialize()
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }

  async onModuleDestroy() {}
}
