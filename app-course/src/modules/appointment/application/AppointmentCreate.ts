import { Inject } from '@nestjs/common';

import { AppointmentRepository } from '../domain/AppointmentRepository';
import { AppointmentInfrastructure } from '../infrastructure/Appointment.infrastructure';

export class AppointmentCreate {
  constructor(
    @Inject(AppointmentInfrastructure)
    private readonly repository: AppointmentRepository,
  ) {}

  create(appointment: any): Promise<any> {
    return this.repository.save(appointment);
  }
}
