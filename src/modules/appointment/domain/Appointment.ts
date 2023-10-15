export type AppointmentProperties = {
  id: string;
  patientId: string;
  medicId: string;
  dateAppointment: Date;
  country: COUNTRY;
};

export type COUNTRY = 'PE' | 'CO' | 'MX';

export enum COUNTRY_ENUM {
  PE = 'PE',
  CO = 'CO',
  MX = 'MX',
}

export class Appointment {
  private id: string;
  private patientId: string;
  private medicId: string;
  private dateAppointment: Date;
  private country: COUNTRY;

  constructor(props: AppointmentProperties) {
    Object.assign(this, props);
  }

  properties(): AppointmentProperties {
    return {
      id: this.id,
      patientId: this.patientId,
      medicId: this.medicId,
      dateAppointment: this.dateAppointment,
      country: this.country,
    };
  }
}
