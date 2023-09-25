import { Appointment, COUNTRY_ENUM } from '../domain/Appointment';
import { AppointmentRepository } from '../domain/AppointmentRepository';
import { AppointmentMemory } from './AppointmentMemory';

export class AppointmentInfrastructure implements AppointmentRepository {
  getByPatientId(
    patientId: string,
    country: COUNTRY_ENUM,
  ): Promise<Appointment[]> {
    return Promise.resolve(
      AppointmentMemory.list.filter(
        (el) =>
          el.properties().patientId === patientId &&
          el.properties().country === country,
      ),
    );
  }
  save(appointment: Appointment): Promise<Appointment> {
    return Promise.resolve(appointment);
  }
}
