import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { CourseEntity } from './course.entity';

@Entity({ name: 'itemSyllabus' })
export class ItemSyllabusEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => CourseEntity, (course) => course.itemSyllabus)
  course: CourseEntity;
}
