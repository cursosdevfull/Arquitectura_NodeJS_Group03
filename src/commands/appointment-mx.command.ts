import { ICommand } from "./commant";

export interface IAppointmentMX {
  patientId: number;
  medicId: number;
  dateAppointment: Date;
  country: string;
}

export class AppointmentMX implements ICommand {
  private patientId: number;
  private medicId: number;
  private dateAppointment: Date;
  private country: string;

  constructor(props: IAppointmentMX) {
    this.patientId = props.patientId;
    this.medicId = props.medicId;
    this.dateAppointment = props.dateAppointment;
    this.country = props.country;
  }

  properties() {
    return {
      patientId: this.patientId,
      medicId: this.medicId,
      dateAppointment: this.dateAppointment,
      country: this.country,
    };
  }
}
