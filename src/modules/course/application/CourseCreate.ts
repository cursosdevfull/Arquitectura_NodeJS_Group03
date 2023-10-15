import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { CourseRepository } from '../domain/repositories/CourseRepository';
import { Course } from '../domain/roots/Course';
import { CourseInfrastructure } from '../infrastructure/Course';

@Injectable()
export class CourseCreate {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}
  async execute(course: Course) {
    const courseMatched: Awaited<Course> = await this.repository.findByTitle(
      course.properties().title,
    );

    if (courseMatched) {
      throw new BadRequestException('Course already exists');
    }

    const courseMatchedSlug: Awaited<Course> = await this.repository.findBySlug(
      course.properties().slug,
    );

    if (courseMatchedSlug) {
      throw new BadRequestException('Course Slug already exists');
    }

    return await this.repository.save(course);
  }
}
