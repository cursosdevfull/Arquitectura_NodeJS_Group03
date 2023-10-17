import { Module } from '@nestjs/common';

import { AuthApplication } from '../application/auth.application';
import { TokenService } from '../application/services/token.service';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { AuthController } from './auth.controller';

const controllers = [AuthController];
const application = [AuthApplication];
const infrastructure = [AuthInfrastructure];
const otherServices = [TokenService];
const imports = [];

@Module({
  controllers: [...controllers],
  providers: [...application, ...infrastructure, ...otherServices],
  imports: [...imports],
})
export class AuthModule {}
