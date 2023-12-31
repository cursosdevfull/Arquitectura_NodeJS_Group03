import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Roles } from 'src/core/presentation/decorators/role.decorator';
import { AuthenticationGuard } from 'src/core/presentation/guards/authentication.guard';
import { AuthorizationGuard } from 'src/core/presentation/guards/authorization.guard';
import { RegisterEventInterceptor } from 'src/extras/register-event.interceptor';
import { v4 as uuidv4 } from 'uuid';

import { CourseCreateCommand } from '../application/commands/CourseCreateCommand';
import { CourseDeleteCommand } from '../application/commands/CourseDeleteCommand';
import { CourseUpdateCommand } from '../application/commands/CourseUpdateCommand';
import { CourseGetAllQuery } from '../application/queries/CourseGetAllQuery';
import { CourseGetOneQuery } from '../application/queries/CourseGetOneQuery';
import { CourseProps } from '../domain/roots/Course';
import { CourseService } from './CourseService';
import { CourseCreateDto } from './dtos/CourseCreate.dto';
import { CourseDeleteDto } from './dtos/CourseDelete.dto';
import { CourseGetOneDto } from './dtos/CourseGetOne.dto';
import { CourseUpdateDto } from './dtos/CourseUpdate.dto';
import { CourseUpdateParamDto } from './dtos/CourseUpdateParam.dto';

@Controller('course')
@Roles('ADMIN')
@UseGuards(AuthenticationGuard)
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly logger: Logger,
  ) {}
  @Post()
  @UseGuards(AuthorizationGuard)
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
  @UseGuards(AuthorizationGuard)
  async delete(@Param() param: CourseDeleteDto) {
    const command = Object.assign(new CourseDeleteCommand(), param);
    const courseDeleted = this.commandBus.execute(command);

    return courseDeleted;
  }

  @Put(':id')
  @UseGuards(AuthorizationGuard)
  async update(
    @Param() param: CourseUpdateParamDto,
    @Body() body: CourseUpdateDto,
  ) {
    const props: CourseProps = {
      id: param.id,
      ...body,
    };
    const command = Object.assign(new CourseUpdateCommand(), props);
    const courseDeleted = this.commandBus.execute(command);

    return courseDeleted;
  }

  @Get(':id')
  async getOne(@Param() param: CourseGetOneDto) {
    const query = Object.assign(new CourseGetOneQuery(), param);
    const course = await this.queryBus.execute(query);

    return course;
  }

  @Get()
  //@UseGuards(AuthenticationTestGuard)
  @UseInterceptors(RegisterEventInterceptor)
  async getAll() {
    this.logger.log('Controller method executed', 'CourseController');

    const query = new CourseGetAllQuery();
    const courses = await this.queryBus.execute(query);

    return courses;
  }
}
