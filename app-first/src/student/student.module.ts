import { Module } from '@nestjs/common';

import { StudentController } from './student.controller';

@Module({
  controllers: [StudentController],
})
export class StudentModule {}
