import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppointmentModule } from './modules/appointment/presentation/Appointment.module';
import { CourseModule } from './modules/course/presentation/Course.module';

const modules = [CourseModule, AppointmentModule];

@Module({
  imports: [...modules],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
