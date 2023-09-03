import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { LayoutOptions } from './layout-options';
import { ProviderStudent } from './provider';
import { StudentController } from './student.controller';
import { StudentProvider01 } from './student.provider';
import { StudentService } from './student.service';

@Module({
  imports: [HttpModule],
  controllers: [StudentController],
  providers: [
    {
      provide: ProviderStudent,
      useClass: StudentProvider01,
    },
    {
      provide: StudentService,
      useClass: StudentService,
    },
    {
      provide: 'ORIENTATION',
      useValue: 'horizontal',
    },
    {
      provide: 'LAYOUT',
      useFactory: (orientation: string) => {
        return new LayoutOptions(orientation);
      },
      inject: ['ORIENTATION'],
    },
  ],
})
export class StudentModule {}
