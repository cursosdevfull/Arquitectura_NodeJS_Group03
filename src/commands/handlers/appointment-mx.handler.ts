import { AppointmentMX } from "../appointment-mx.command";
import { ICommandHandler } from "./command-handler";

export class AppointmentMXHandler implements ICommandHandler<AppointmentMX> {
  handle(command: AppointmentMX): void {
    console.log("AppointmentMXHandler", JSON.stringify(command.properties()));
  }
  canHandle(command: unknown): boolean {
    return command instanceof AppointmentMX;
  }
}
