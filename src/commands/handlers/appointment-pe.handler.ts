import { AppointmentPE } from "../appointment-pe.command";
import { ICommandHandler } from "./command-handler";

export class AppointmentPEHandler implements ICommandHandler<AppointmentPE> {
  handle(command: AppointmentPE): void {
    console.log("AppointmentPEHandler", JSON.stringify(command.properties()));
  }
  canHandle(command: unknown): boolean {
    return command instanceof AppointmentPE;
  }
}
