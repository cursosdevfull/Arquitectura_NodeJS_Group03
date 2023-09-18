import { IdVO } from '../value-objects/id.vo';
import { Course, CourseProps } from './Course';

export class CourseFactory {
  static create(props: CourseProps) {
    IdVO.create(props.id);

    if (props.title.length > 120) {
      throw new Error('Invalid title. Title must be less than 120 characters');
    }

    if (props.description && props.description.length > 500) {
      throw new Error(
        'Invalid description. Description must be less than 500 characters',
      );
    }

    if (props.goals && props.goals.length < 2) {
      throw new Error('Invalid goals. Goals must be greater than 1');
    }

    if (props.requeriments && props.requeriments.length < 2) {
      throw new Error(
        'Invalid requeriments. Requeriments must be greater than 1',
      );
    }

    if (props.itemSyllabus && props.itemSyllabus.length < 2) {
      throw new Error(
        'Invalid itemSyllabus. itemSyllabus must be greater than 1',
      );
    }

    return new Course(props);
  }
}
