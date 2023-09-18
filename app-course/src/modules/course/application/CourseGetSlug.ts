import { Inject, Injectable } from '@nestjs/common';

import { CourseRepository } from '../domain/repositories/CourseRepository';
import { CourseInfrastructure } from '../infrastructure/Course';

@Injectable()
export class CourseGetSlug {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}
  async execute(slug: string) {
    let course = await this.repository.findBySlug(slug);

    let count = 1;
    while (course) {
      course = await this.repository.findBySlug(`${slug}-${count}`);
      count++;
    }

    return count === 1 ? slug : `${slug}-${count - 1}`;
  }
}
