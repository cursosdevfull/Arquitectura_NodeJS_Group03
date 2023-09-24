import { AppointmentCO } from "../appointment-co.command";
import { ICommandHandler } from "./command-handler";

export class AppointmentCOHandler implements ICommandHandler<AppointmentCO> {
  handle(command: AppointmentCO): void {
    console.log(
      "AppointmentCOHandler created",
      JSON.stringify(command.properties())
    );
  }
  canHandle(command: unknown): boolean {
    return command instanceof AppointmentCO;
  }
}
