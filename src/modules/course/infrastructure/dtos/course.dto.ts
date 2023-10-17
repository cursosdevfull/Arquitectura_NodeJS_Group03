import { STATUS } from 'src/core/domain/status.type';

import { Course } from '../../domain/roots/Course';
import { CourseFactory } from '../../domain/roots/CourseFactory';
import { CourseEntity } from '../entities/course.entity';
import { GoalEntity } from '../entities/goal.entity';
import { ItemSyllabusEntity } from '../entities/itemSyllabus';
import { RequerimentEntity } from '../entities/requeriment';

export class CourseDto {
  static fromDomainToData(course: Course): CourseEntity {
    const courseEntity = new CourseEntity();
    courseEntity.id = course.properties().id;
    courseEntity.title = course.properties().title;
    courseEntity.description = course.properties().description;
    courseEntity.slug = course.properties().slug;
    courseEntity.createdAt = course.properties().createdAt;
    courseEntity.updatedAt = course.properties().updatedAt;
    courseEntity.deletedAt = course.properties().deletedAt;
    courseEntity.status = course.properties().status;
    courseEntity.goals = course.properties().goals?.map((goal) => {
      const goalEntity = new GoalEntity();
      goalEntity.id = goal.id;
      goalEntity.description = goal.description;
      return goalEntity;
    });
    courseEntity.requeriments = course
      .properties()
      .requeriments?.map((requeriment) => {
        const requerimentEntity = new RequerimentEntity();
        requerimentEntity.id = requeriment.id;
        requerimentEntity.description = requeriment.description;
        return requerimentEntity;
      });
    courseEntity.itemSyllabus = course
      .properties()
      .itemSyllabus?.map((itemSyllabus) => {
        const itemSyllabusEntity = new ItemSyllabusEntity();
        itemSyllabusEntity.id = itemSyllabus.id;
        itemSyllabusEntity.description = itemSyllabus.description;
        return itemSyllabusEntity;
      });

    return courseEntity;
  }

  static fromDataToDomain(
    coursesEntity: CourseEntity | CourseEntity[],
    courseFactory: CourseFactory,
  ): Course | Course[] {
    if (Array.isArray(coursesEntity)) {
      return coursesEntity.map((courseEntity) => {
        const course = courseFactory.create({
          id: courseEntity.id,
          title: courseEntity.title,
          description: courseEntity.description,
          slug: courseEntity.slug,
          status: courseEntity.status as STATUS,
          goals: courseEntity.goals?.map((goalEntity) => {
            return {
              id: goalEntity.id,
              description: goalEntity.description,
            };
          }),
          requeriments: courseEntity.requeriments?.map((requerimentEntity) => {
            return {
              id: requerimentEntity.id,
              description: requerimentEntity.description,
            };
          }),
          itemSyllabus: courseEntity.itemSyllabus?.map((itemSyllabusEntity) => {
            return {
              id: itemSyllabusEntity.id,
              description: itemSyllabusEntity.description,
            };
          }),
        });

        return course;
      });
    } else {
      const course = courseFactory.create({
        id: coursesEntity.id,
        title: coursesEntity.title,
        description: coursesEntity.description,
        slug: coursesEntity.slug,
        status: coursesEntity.status as STATUS,
        goals: coursesEntity.goals?.map((goalEntity) => {
          return {
            id: goalEntity.id,
            description: goalEntity.description,
          };
        }),
        requeriments: coursesEntity.requeriments?.map((requerimentEntity) => {
          return {
            id: requerimentEntity.id,
            description: requerimentEntity.description,
          };
        }),
        itemSyllabus: coursesEntity.itemSyllabus?.map((itemSyllabusEntity) => {
          return {
            id: itemSyllabusEntity.id,
            description: itemSyllabusEntity.description,
          };
        }),
      });

      return course;
    }
  }
}
