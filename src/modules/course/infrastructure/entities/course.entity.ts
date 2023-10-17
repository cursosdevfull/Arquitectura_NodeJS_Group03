import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { GoalEntity } from './goal.entity';
import { ItemSyllabusEntity } from './itemSyllabus';
import { RequerimentEntity } from './requeriment';

@Entity({ name: 'course' })
export class CourseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  slug: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  status: string;

  @OneToMany(() => GoalEntity, (goal) => goal.course, {
    cascade: true,
    eager: true,
  })
  goals: GoalEntity[];

  @OneToMany(() => RequerimentEntity, (requeriment) => requeriment.course, {
    cascade: true,
    eager: true,
  })
  requeriments: RequerimentEntity[];

  @OneToMany(() => ItemSyllabusEntity, (itemSyllabus) => itemSyllabus.course, {
    cascade: true,
    eager: true,
  })
  itemSyllabus: ItemSyllabusEntity[];
}
