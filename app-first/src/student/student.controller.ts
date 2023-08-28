import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  list() {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];
  }
}
