import { Inject } from '@nestjs/common';

import { Appointment, COUNTRY_ENUM } from '../domain/Appointment';
import { AppointmentRepository } from '../domain/AppointmentRepository';
import { AppointmentInfrastructure } from '../infrastructure/Appointment.infrastructure';

export class AppointmentHistoryByPatient {
  constructor(
    @Inject(AppointmentInfrastructure)
    private readonly repository: AppointmentRepository,
  ) {}

  getHistory(patientId: string, country: COUNTRY_ENUM): Promise<Appointment[]> {
    return this.repository.getByPatientId(patientId, country);
  }
}
