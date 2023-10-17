import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { CourseEntity } from './modules/course/infrastructure/entities/course.entity';
import { GoalEntity } from './modules/course/infrastructure/entities/goal.entity';
import { ItemSyllabusEntity } from './modules/course/infrastructure/entities/itemSyllabus';
import { RequerimentEntity } from './modules/course/infrastructure/entities/requeriment';
import { Parameters } from './parameters';

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
  private static dataSource: DataSource | void;

  getParametersConnection() {
    const database: IDatabase = {
      host: Parameters.DB_HOST,
      port: Parameters.DB_PORT,
      username: Parameters.DB_USER,
      password: Parameters.DB_PASSWORD,
      database: Parameters.DB_NAME,
      synchronize: Parameters.DB_SYNCHRONIZE,
      logging: Parameters.DB_LOGGING,
    };

    return database;
  }

  static get manager() {
    return (this.dataSource as DataSource).manager;
  }

  async onModuleInit() {
    AppService.dataSource = await new DataSource({
      type: 'mysql',
      ...this.getParametersConnection(),
      entities: [
        CourseEntity,
        GoalEntity,
        RequerimentEntity,
        ItemSyllabusEntity,
      ],
    })
      .initialize()
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }

  async onModuleDestroy() {}
}
