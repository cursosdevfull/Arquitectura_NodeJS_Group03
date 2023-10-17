import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { CourseEntity } from './course.entity';

@Entity({ name: 'goal' })
export class GoalEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => CourseEntity, (course) => course.goals)
  course: CourseEntity;
}
