import { BadRequestException, Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../../domain/repositories/CourseRepository';
import { Course, CourseProps } from '../../domain/roots/Course';
import { CourseFactory } from '../../domain/roots/CourseFactory';
import { CourseInfrastructure } from '../../infrastructure/Course';

export class CourseCreateCommand implements ICommand {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string | null;
  readonly goals: { id: string; description: string }[] | null;
  readonly requeriments: { id: string; description: string }[] | null;
  readonly itemSyllabus: { id: string; description: string }[] | null;
}

@CommandHandler(CourseCreateCommand)
export class CourseCreateCommandHandler
  implements ICommandHandler<CourseCreateCommand, any>
{
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
    private readonly courseFactory: CourseFactory,
  ) {}

  async execute(command: CourseCreateCommand): Promise<any> {
    const courseMatched: Awaited<Course> = await this.repository.findByTitle(
      command.title,
    );

    if (courseMatched) {
      throw new BadRequestException('Course already exists');
    }

    const courseMatchedSlug: Awaited<Course> = await this.repository.findBySlug(
      command.slug,
    );

    if (courseMatchedSlug) {
      throw new BadRequestException('Course Slug already exists');
    }

    const props: CourseProps = {
      id: command.id,
      slug: command.slug,
      title: command.title,
      description: command.description,
      goals: command.goals,
      requeriments: command.requeriments,
      itemSyllabus: command.itemSyllabus,
    };

    const course = this.courseFactory.create(props);
    await this.repository.save(course);
    course.commit();

    return course;
  }
}
