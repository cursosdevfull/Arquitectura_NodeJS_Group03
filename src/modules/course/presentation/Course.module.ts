import { Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CourseCreateCommandHandler } from '../application/commands/CourseCreateCommand';
import { CourseDeleteCommandHandler } from '../application/commands/CourseDeleteCommand';
import { CourseUpdateCommandHandler } from '../application/commands/CourseUpdateCommand';
import { CourseCreate } from '../application/CourseCreate';
import { CourseGetSlug } from '../application/CourseGetSlug';
import { CreateCourseEventHandler } from '../application/events/create-course-event-handler';
import { DeleteCourseEventHandler } from '../application/events/delete-course-event-handler';
import { UpdateCourseEventHandler } from '../application/events/update-course-event-handler';
import { CourseGetAllQueryHandler } from '../application/queries/CourseGetAllQuery';
import { CourseGetOneQueryHandler } from '../application/queries/CourseGetOneQuery';
import { CourseFactory } from '../domain/roots/CourseFactory';
import { CourseInfrastructure } from '../infrastructure/Course';
import { CourseController } from './Course.controller';
import { CourseService } from './CourseService';

const controllers = [CourseController];
const applications = [
  CourseCreate,
  CourseGetSlug,
  CreateCourseEventHandler,
  CourseCreateCommandHandler,
  DeleteCourseEventHandler,
  CourseDeleteCommandHandler,
  UpdateCourseEventHandler,
  CourseUpdateCommandHandler,
  CourseGetOneQueryHandler,
  CourseGetAllQueryHandler,
];
const infrastructures = [CourseInfrastructure];
const domains = [CourseFactory];
const presentations = [CourseService];

@Module({
  controllers: [...controllers],
  providers: [
    ...applications,
    ...domains,
    ...infrastructures,
    ...presentations,
    Logger,
  ],
  imports: [CqrsModule],
})
export class CourseModule {}
