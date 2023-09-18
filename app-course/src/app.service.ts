import { Injectable } from '@nestjs/common';

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
  async onModuleInit() {
    console.log('AppService.onModuleInit()');
  }

  async onModuleDestroy() {
    console.log('AppService.onModuleDestroy()');
  }
}
