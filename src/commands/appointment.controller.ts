import { AppointmentCO } from "./appointment-co.command";
import { AppointmentMX } from "./appointment-mx.command";
import { AppointmentPE } from "./appointment-pe.command";
import { CommandBus } from "./CommandBus";
import { ICommand } from "./commant";

export class AppointmentController {
  constructor(private readonly commandBus: CommandBus) {}

  addAppointment(
    country: string,
    dateAppointment: Date,
    patientId: number,
    medicId: number
  ) {
    let command: ICommand;

    switch (country) {
      case "MX":
        command = new AppointmentMX({
          dateAppointment,
          patientId,
          medicId,
          country,
        });
        break;
      case "CO":
        command = new AppointmentCO({
          dateAppointment,
          patientId,
          medicId,
          country,
        });
        break;
      case "PE":
        command = new AppointmentPE({
          dateAppointment,
          patientId,
          medicId,
          country,
        });
        break;
      default:
        throw new Error("Country not supported");
    }

    this.commandBus.execute(command);
  }
}
