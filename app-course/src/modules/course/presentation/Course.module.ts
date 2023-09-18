import { Module } from '@nestjs/common';

import { CourseCreate } from '../application/CourseCreate';
import { CourseGetSlug } from '../application/CourseGetSlug';
import { CourseInfrastructure } from '../infrastructure/Course';
import { CourseController } from './Course.controller';
import { CourseService } from './CourseService';

const controllers = [CourseController];
const applications = [CourseCreate, CourseGetSlug];
const infrastructures = [CourseInfrastructure];
const presentations = [CourseService];

@Module({
  controllers: [...controllers],
  providers: [...applications, ...infrastructures, ...presentations],
})
export class CourseModule {}
