import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CourseCreateCommandHandler } from '../application/commands/CourseCreateCommand';
import { CourseDeleteCommandHandler } from '../application/commands/CourseDeleteCommand';
import { CourseCreate } from '../application/CourseCreate';
import { CourseGetSlug } from '../application/CourseGetSlug';
import { CreateCourseEventHandler } from '../application/events/create-course-event-handler';
import { DeleteCourseEventHandler } from '../application/events/delete-course-event-handler';
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
  ],
  imports: [CqrsModule],
})
export class CourseModule {}
