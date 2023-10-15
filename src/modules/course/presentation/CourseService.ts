import { Injectable } from '@nestjs/common';
import urlSlug from 'url-slug';

import { CourseGetSlug } from '../application/CourseGetSlug';

@Injectable()
export class CourseService {
  constructor(private readonly application: CourseGetSlug) {}
  async generateSlug(title: string) {
    const slug = urlSlug(title);
    return await this.application.execute(slug);
  }
}
