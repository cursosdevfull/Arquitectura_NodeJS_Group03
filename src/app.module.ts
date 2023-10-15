import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { AppService } from './app.service';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { AppointmentModule } from './modules/appointment/presentation/Appointment.module';
import { CourseModule } from './modules/course/presentation/Course.module';

const modules = [
  CourseModule,
  AppointmentModule,
  TerminusModule,
  HttpModule,
  ConfigModule.forRoot(),
];

@Module({
  imports: [...modules],
  controllers: [HealthcheckController],
  providers: [AppService],
})
export class AppModule {}
