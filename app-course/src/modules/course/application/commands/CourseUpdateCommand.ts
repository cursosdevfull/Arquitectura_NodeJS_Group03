import { BadRequestException, Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../../domain/repositories/CourseRepository';
import { Course, CourseUpdateProps } from '../../domain/roots/Course';
import { CourseFactory } from '../../domain/roots/CourseFactory';
import { StringLengthVO } from '../../domain/value-objects/string-length';
import { CourseInfrastructure } from '../../infrastructure/Course';

export class CourseUpdateCommand implements ICommand {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string | null;
  readonly goals: { id: string; description: string }[] | null;
  readonly requeriments: { id: string; description: string }[] | null;
  readonly itemSyllabus: { id: string; description: string }[] | null;
}

@CommandHandler(CourseUpdateCommand)
export class CourseUpdateCommandHandler
  implements ICommandHandler<CourseUpdateCommand, any>
{
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
    private readonly courseFactory: CourseFactory,
  ) {}

  async execute(command: CourseUpdateCommand): Promise<any> {
    const courseMatched: Awaited<Course> = await this.repository.findById(
      command.id,
    );

    if (!courseMatched) {
      throw new BadRequestException("Course doesn't exists");
    }

    const stringResult = StringLengthVO.create(command.title, 5, 20);
    if (stringResult.isErr()) {
      throw new BadRequestException(stringResult.error.message);
    }

    const props: CourseUpdateProps = Object.assign(
      courseMatched.properties(),
      command,
    );
    courseMatched.update(props);
    await this.repository.save(courseMatched);

    courseMatched.commit();
    return courseMatched;
  }
}
