import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../../domain/repositories/CourseRepository';
import { Course } from '../../domain/roots/Course';
import { CourseFactory } from '../../domain/roots/CourseFactory';
import { CourseInfrastructure } from '../../infrastructure/Course';

export class CourseDeleteCommand implements ICommand {
  readonly id: string;
}

@CommandHandler(CourseDeleteCommand)
export class CourseDeleteCommandHandler
  implements ICommandHandler<CourseDeleteCommand, any>
{
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
    private readonly courseFactory: CourseFactory,
  ) {}

  async execute(command: CourseDeleteCommand): Promise<any> {
    const courseMatched: Awaited<Course> = await this.repository.findById(
      command.id,
    );

    courseMatched.delete();
    await this.repository.save(courseMatched);

    courseMatched.commit();
    return courseMatched;
  }
}
