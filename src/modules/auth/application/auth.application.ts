import { Inject, Injectable } from '@nestjs/common';

import { AuthRepository } from '../domain/repositories/auth.repository';
import { Auth } from '../domain/roots/auth';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { TokenService } from './services/token.service';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(AuthInfrastructure) private readonly repository: AuthRepository,
    private readonly tokenService: TokenService,
  ) {}

  async login(auth: Auth) {
    const userFound = await this.repository.getUserByEmail(
      auth.properties().email,
    );
    if (userFound && userFound.password === auth.properties().password) {
      return {
        accessToken: this.tokenService.generateToken(
          userFound.id,
          userFound.email,
          userFound.roles,
        ),
        refreshToken: userFound.refreshToken,
      };
    }

    return null;
  }
}
