import { STATUS } from '../../../../core/domain/status.type';
import { Goal } from '../entities/Goal';
import { ItemSyllabus } from '../entities/ItemSyllabus';
import { Requeriment } from '../entities/Requeriment';

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
}

export type CourseProps = CourseEssentials & Partial<CourseOptionals>;
export type CourseUpdateProps = Partial<
  Pick<CourseEssentials, 'title'> & CourseOptionals
>;

export class Course implements IRoot {
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
    };
  }

  update(props: CourseUpdateProps) {
    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.status = 'deleted';
    this.deletedAt = new Date();
  }
}
