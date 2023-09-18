import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { CourseModule } from './modules/course/presentation/Course.module';

const modules = [CourseModule];

@Module({
  imports: [...modules],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
