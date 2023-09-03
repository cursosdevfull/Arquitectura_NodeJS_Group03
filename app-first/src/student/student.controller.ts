import { Controller, Delete, Get, Inject, Post, Put } from '@nestjs/common';

import { ProviderStudent } from './provider';
import { StudentService } from './student.service';

//import { StudentProvider01 } from './student.module';
@Controller('student')
export class StudentController {
  constructor(
    private student: ProviderStudent,
    @Inject('LAYOUT') private obj: any,
    private studentService: StudentService,
  ) {}

  @Get()
  async list() {
    const data = await this.studentService.list();
    return data;
    /*const promise = new Promise((resolve, reject) => {
      this.studentService.list().subscribe({
        next: (result) => resolve(result.data),
      });
    });

    const results = await promise;

    return results;*/

    //console.log(this.obj.getValue());
    //return this.student.getValue();
    //return this.studentService.list();
  }

  @Post()
  create() {
    //return this.studentService.create();
  }

  @Put()
  update() {
    //return this.studentService.update();
  }

  @Delete()
  delete() {
    //return this.studentService.delete();
  }
}
