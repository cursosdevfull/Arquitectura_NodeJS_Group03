import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CourseDeletedEvent } from '../../domain/events/CourseDeletedEvent';

@EventsHandler(CourseDeletedEvent)
export class DeleteCourseEventHandler
  implements IEventHandler<CourseDeletedEvent>
{
  handle(event: CourseDeletedEvent) {
    console.log('DeleteCourseEventHandler', event);
  }
}
