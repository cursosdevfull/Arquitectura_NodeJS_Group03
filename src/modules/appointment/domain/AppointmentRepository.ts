import { Appointment, COUNTRY_ENUM } from './Appointment';

export interface AppointmentRepository {
  save(appointment: Appointment): Promise<Appointment>;
  getByPatientId(
    patientId: string,
    country: COUNTRY_ENUM,
  ): Promise<Appointment[]>;
}
