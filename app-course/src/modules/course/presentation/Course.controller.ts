import { Body, Controller, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CourseCreate } from '../application/CourseCreate';
import { CourseProps } from '../domain/roots/Course';
import { CourseFactory } from '../domain/roots/CourseFactory';
import { CourseService } from './CourseService';
import { CourseCreateDto } from './dtos/CourseCreate.dto';

@Controller('course')
export class CourseController {
  constructor(
    private readonly application: CourseCreate,
    private readonly courseService: CourseService,
  ) {}
  @Post()
  async add(@Body() body: CourseCreateDto) {
    const slugGenerate = await this.courseService.generateSlug(body.title);
    const props: CourseProps = {
      slug: slugGenerate,
      id: uuidv4(),
      ...body,
    };

    const course = CourseFactory.create(props);
    return await this.application.execute(course);
  }
}
