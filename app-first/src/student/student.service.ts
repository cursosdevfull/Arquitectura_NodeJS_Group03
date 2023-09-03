import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import { User } from './user.interface';

@Injectable()
export class StudentService {
  constructor(private readonly http: HttpService) {}
  async list(): Promise<User[]> {
    const { data } = await firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/users'),
    );

    return data;
    /*const promise = new Promise<User[]>((resolve, reject) => {
      this.http
        .get('https://jsonplaceholder.typicode.com/users')
        .subscribe((response) => resolve(response.data));
    });
    return await promise;*/
    /*.subscribe((response) => {
        console.log(response.data);
      });
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];*/
  }

  create() {
    return {
      id: 3,
      name: 'John Doe',
    };
  }

  update() {
    return {
      id: 3,
      name: 'Jane Doe',
    };
  }

  delete() {
    return {
      id: 3,
      name: 'Jane Doe',
    };
  }
}
