import { HttpModule } from '@nestjs/axios';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { ThrottlerModule } from '@nestjs/throttler';

import { AppService } from './app.service';
import { LoggerOwner } from './extras/logger.middleware';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { AppointmentModule } from './modules/appointment/presentation/Appointment.module';
import { AuthModule } from './modules/auth/presentation/auth.module';
import { CourseModule } from './modules/course/presentation/Course.module';
import { Parameters } from './parameters';

const modules = [
  CourseModule,
  AppointmentModule,
  AuthModule,
  TerminusModule,
  HttpModule,
  ConfigModule.forRoot(),
  JwtModule.register({
    global: true,
    secret: Parameters.TOKEN_SECRET,
    signOptions: { expiresIn: Parameters.TOKEN_EXPIRES },
  }),
  ThrottlerModule.forRoot([
    {
      ttl: 60000,
      limit: 20,
    },
  ]),
];

@Module({
  imports: [...modules, AuthModule],
  controllers: [HealthcheckController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerOwner)
      .forRoutes({ path: 'course', method: RequestMethod.GET });
  }
}
