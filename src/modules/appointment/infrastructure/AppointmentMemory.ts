import { Appointment } from '../domain/Appointment';

export class AppointmentMemory {
  private static appointments: Array<Appointment> = [
    new Appointment({
      id: 'f1b99daa-e5c7-4006-9b12-9c4935f06bd0',
      patientId: '5fa01069-7f0e-4136-93f5-45343bd0c513',
      medicId: 'e82cbaba-3994-4588-816b-d441c2754441',
      dateAppointment: new Date(),
      country: 'PE',
    }),
    new Appointment({
      id: 'f1b99daa-e5c7-4006-9b12-9c4935f06bd0',
      patientId: '9e6f3908-3f59-4b48-b8e7-7ec3ce28fd46',
      medicId: 'e82cbaba-3994-4588-816b-d441c2754441',
      dateAppointment: new Date(),
      country: 'CO',
    }),
    new Appointment({
      id: 'f1b99daa-e5c7-4006-9b12-9c4935f06bd0',
      patientId: '76f69662-f5fd-493b-a2d0-61dd3faca8ed',
      medicId: 'e82cbaba-3994-4588-816b-d441c2754441',
      dateAppointment: new Date(),
      country: 'MX',
    }),
  ];

  static get list(): Array<Appointment> {
    return [...this.appointments];
  }
}
