import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { EntityManager } from 'typeorm';

import { CourseRepository } from '../domain/repositories/CourseRepository';
import { Course } from '../domain/roots/Course';
import { CourseFactory } from '../domain/roots/CourseFactory';
import { CourseDto } from './dtos/course.dto';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CourseInfrastructure implements CourseRepository {
  constructor(public readonly courseFactory: CourseFactory) {}

  async findByTitle(title: string): Promise<Course> {
    const manager: EntityManager = AppService.manager;
    const repository = manager.getRepository(CourseEntity);

    const courseEntity = await repository.findOne({ where: { title } });
    const course = CourseDto.fromDataToDomain(courseEntity, this.courseFactory);

    return course as Course;
  }

  async findBySlug(slug: string): Promise<Course> {
    const manager: EntityManager = AppService.manager;
    const repository = manager.getRepository(CourseEntity);

    const courseEntity = await repository.findOne({ where: { slug } });
    const course = CourseDto.fromDataToDomain(courseEntity, this.courseFactory);

    return course as Course;
  }

  async save(course: Course): Promise<Course> {
    const manager: EntityManager = AppService.manager;
    const repository = manager.getRepository(CourseEntity);
    const courseEntity = CourseDto.fromDomainToData(course);

    await repository.save(courseEntity);

    return course;
  }

  async findById(id: string): Promise<Course> {
    const manager: EntityManager = AppService.manager;
    const repository = manager.getRepository(CourseEntity);

    const courseEntity = await repository.findOne({ where: { id } });
    const course = CourseDto.fromDataToDomain(courseEntity, this.courseFactory);

    return course as Course;
  }

  async findAll(): Promise<Course[]> {
    const manager: EntityManager = AppService.manager;
    const repository = manager.getRepository(CourseEntity);

    const coursesEntity = await repository.find();
    const courses = CourseDto.fromDataToDomain(
      coursesEntity,
      this.courseFactory,
    );
    return courses as Course[];
  }
}
