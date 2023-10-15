import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

import { CourseCreatedEvent } from '../events/CourseCreatedEvent';
import { IdVO } from '../value-objects/id.vo';
import { Course, CourseProps } from './Course';

export class CourseFactory {
  constructor(
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher,
  ) {}

  create(props: CourseProps) {
    IdVO.create(props.id);

    if (props.title.length > 120) {
      throw new Error('Invalid title. Title must be less than 120 characters');
    }

    if (props.description && props.description.length > 500) {
      throw new Error(
        'Invalid description. Description must be less than 500 characters',
      );
    }

    if (props.goals && props.goals.length < 2) {
      throw new Error('Invalid goals. Goals must be greater than 1');
    }

    if (props.requeriments && props.requeriments.length < 2) {
      throw new Error(
        'Invalid requeriments. Requeriments must be greater than 1',
      );
    }

    if (props.itemSyllabus && props.itemSyllabus.length < 2) {
      throw new Error(
        'Invalid itemSyllabus. itemSyllabus must be greater than 1',
      );
    }

    const courseCreated = new Course(props);

    this.eventPublisher.mergeObjectContext(courseCreated);
    courseCreated.apply(Object.assign(new CourseCreatedEvent(), courseCreated));

    return courseCreated;
  }
}
