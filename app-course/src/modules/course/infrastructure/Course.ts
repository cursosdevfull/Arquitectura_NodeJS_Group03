import { CourseRepository } from '../domain/repositories/CourseRepository';
import { Course } from '../domain/roots/Course';
import { CourseInMemory } from './CourseInMemory';

export class CourseInfrastructure implements CourseRepository {
  findByTitle(title: string): Promise<Course> {
    return Promise.resolve(
      CourseInMemory.listCourse.find(
        (course: Course) =>
          course.properties().title.toLowerCase() === title.toLowerCase(),
      ),
    );
  }

  findBySlug(slug: string): Promise<Course> {
    return Promise.resolve(
      CourseInMemory.listCourse.find(
        (course: Course) => course.properties().slug === slug,
      ),
    );
  }

  async save(course: Course): Promise<Course> {
    CourseInMemory.listCourse.push(course);

    return Promise.resolve(course);
  }

  async findById(id: string): Promise<Course> {
    return Promise.resolve(
      CourseInMemory.listCourse.find(
        (course: Course) => course.properties().id === id,
      ),
    );
  }
}
