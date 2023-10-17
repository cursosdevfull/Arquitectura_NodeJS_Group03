import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { CourseEntity } from './course.entity';

@Entity({ name: 'requeriment' })
export class RequerimentEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => CourseEntity, (course) => course.requeriments)
  course: CourseEntity;
}
