import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CourseCreatedEvent } from '../../domain/events/CourseCreatedEvent';

@EventsHandler(CourseCreatedEvent)
export class CreateCourseEventHandler
  implements IEventHandler<CourseCreatedEvent>
{
  handle(event: CourseCreatedEvent) {
    console.log('CreateCourseEventHandler', event);
  }
}
