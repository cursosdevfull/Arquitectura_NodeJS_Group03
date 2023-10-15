import { IEvent } from '@nestjs/cqrs';
import { STATUS } from 'src/core/domain/status.type';

import { Goal } from '../entities/Goal';
import { ItemSyllabus } from '../entities/ItemSyllabus';
import { Requeriment } from '../entities/Requeriment';

export class CourseUpdatedEvent implements IEvent {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly goals: Goal[];
  readonly requeriments: Requeriment[];
  readonly itemSyllabus: ItemSyllabus[];
  readonly status: STATUS;
  readonly slug: string;
  readonly createdAt: Date;
  readonly updatedAt: Date | null;
  readonly deletedAt: Date | null;
}
