import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

import { CourseCreateCommand } from '../application/commands/CourseCreateCommand';
import { CourseDeleteCommand } from '../application/commands/CourseDeleteCommand';
import { CourseCreate } from '../application/CourseCreate';
import { CourseProps } from '../domain/roots/Course';
import { CourseFactory } from '../domain/roots/CourseFactory';
import { CourseService } from './CourseService';
import { CourseCreateDto } from './dtos/CourseCreate.dto';
import { CourseDeleteDto } from './dtos/CourseDelete.dto';

@Controller('course')
export class CourseController {
  constructor(
    private readonly application: CourseCreate,
    private readonly courseService: CourseService,
    private readonly courseFactory: CourseFactory,
    private readonly commandBus: CommandBus,
  ) {}
  @Post()
  async add(@Body() body: CourseCreateDto) {
    const slugGenerate = await this.courseService.generateSlug(body.title);
    const props: CourseProps = {
      slug: slugGenerate,
      id: uuidv4(),
      ...body,
    };

    const command = Object.assign(new CourseCreateCommand(), props);
    const courseCreated = this.commandBus.execute(command);

    return courseCreated;

    //const course = this.courseFactory.create(props);
    //return await this.application.execute(course);
  }

  @Delete(':id')
  async delete(@Param() param: CourseDeleteDto) {
    const command = Object.assign(new CourseDeleteCommand(), param);
    const courseDeleted = this.commandBus.execute(command);

    return courseDeleted;
  }
}
