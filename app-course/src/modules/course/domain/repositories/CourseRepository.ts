import { Course } from '../roots/Course';

export interface CourseRepository {
  findByTitle(title: string): Promise<Course>;
  findBySlug(slug: string): Promise<Course>;
  findById(id: string): Promise<Course>;
  save(course: Course): Promise<Course>;
}
