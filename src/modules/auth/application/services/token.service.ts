import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private readonly jwt: JwtService) {}

  generateToken(id: string, email: string, roles: string[]) {
    const payload = { sub: id, email, roles };
    return this.jwt.sign(payload);
  }
}
