import { Body, Controller, Post } from '@nestjs/common';

import { AuthApplication } from '../application/auth.application';
import { Auth } from '../domain/roots/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly app: AuthApplication) {}

  @Post('login')
  async login(@Body() body: any) {
    const auth: Auth = new Auth(body);
    return await this.app.login(auth);
  }
}
