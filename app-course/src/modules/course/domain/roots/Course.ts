import { AggregateRoot } from '@nestjs/cqrs';

import { STATUS } from '../../../../core/domain/status.type';
import { Goal } from '../entities/Goal';
import { ItemSyllabus } from '../entities/ItemSyllabus';
import { Requeriment } from '../entities/Requeriment';
import { CourseDeletedEvent } from '../events/CourseDeletedEvent';

export interface CourseEssentials {
  id: string;
  title: string;
}

export interface CourseOptionals {
  description: string;
  goals: Goal[];
  requeriments: Requeriment[];
  itemSyllabus: ItemSyllabus[];
  status: STATUS;
  slug: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

export type CourseProps = CourseEssentials & Partial<CourseOptionals>;
export type CourseUpdateProps = Partial<
  Pick<CourseEssentials, 'title'> & CourseOptionals
>;

export class Course extends AggregateRoot {
  private readonly id: string;
  private title: string;
  private description: string;
  private goals: Goal[];
  private requeriments: Requeriment[];
  private itemSyllabus: ItemSyllabus[];
  private status: STATUS;
  private slug: string;
  private readonly createdAt: Date;
  private updatedAt: Date | null;
  private deletedAt: Date | null;

  constructor(props: CourseProps) {
    super();
    Object.assign(this, props);
    this.status = 'draft';
    this.createdAt = new Date();
  }

  properties(): CourseProps {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      goals: this.goals,
      requeriments: this.requeriments,
      itemSyllabus: this.itemSyllabus,
      status: this.status,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(props: CourseUpdateProps) {
    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.status = 'deleted';
    this.deletedAt = new Date();
    this.apply(Object.assign(new CourseDeletedEvent(), this));
  }
}
