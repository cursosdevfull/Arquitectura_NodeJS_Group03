import { BadRequestException, Inject } from '@nestjs/common';
import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../../domain/repositories/CourseRepository';
import { CourseInfrastructure } from '../../infrastructure/Course';

export class CourseGetOneQuery implements IQuery {
  readonly id: string;
}

@QueryHandler(CourseGetOneQuery)
export class CourseGetOneQueryHandler
  implements IQueryHandler<CourseGetOneQuery, any>
{
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async execute(query: CourseGetOneQuery): Promise<any> {
    const courseMatched = await this.repository.findById(query.id);

    if (!courseMatched) {
      throw new BadRequestException("Course doesn't exists");
    }

    return courseMatched;
  }
}
