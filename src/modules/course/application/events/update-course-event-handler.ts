import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CourseUpdatedEvent } from '../../domain/events/CourseUpdatedEvent';

@EventsHandler(CourseUpdatedEvent)
export class UpdateCourseEventHandler
  implements IEventHandler<CourseUpdatedEvent>
{
  handle(event: CourseUpdatedEvent) {
    console.log('UpdateCourseEventHandler', event);
  }
}
