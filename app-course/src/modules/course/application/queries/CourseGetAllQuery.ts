import { BadRequestException, Inject } from '@nestjs/common';
import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../../domain/repositories/CourseRepository';
import { CourseInfrastructure } from '../../infrastructure/Course';

export class CourseGetAllQuery implements IQuery {}

@QueryHandler(CourseGetAllQuery)
export class CourseGetAllQueryHandler
  implements IQueryHandler<CourseGetAllQuery, any>
{
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async execute(query: CourseGetAllQuery): Promise<any> {
    const courseMatched = await this.repository.findAll();

    if (!courseMatched || courseMatched.length === 0) {
      throw new BadRequestException("Course doesn't exists");
    }

    return courseMatched;
  }
}
