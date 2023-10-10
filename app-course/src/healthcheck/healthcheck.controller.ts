import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(
    private readonly http: HttpHealthIndicator,
    private readonly health: HealthCheckService,
  ) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.http.pingCheck('google', 'https://google.com'),
    ]);
  }
}
