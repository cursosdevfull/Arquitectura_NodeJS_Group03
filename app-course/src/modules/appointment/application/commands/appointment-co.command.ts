import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { AppointmentCreate } from '../AppointmentCreate';

export class AppointmentCreateCO implements ICommand {
  constructor(
    readonly id: string,
    readonly patientId: string,
    readonly medicId: string,
    readonly dateAppointment: Date,
    readonly country: string,
  ) {}
}

@CommandHandler(AppointmentCreateCO)
export class AppointmentCreateCOHandler
  implements ICommandHandler<AppointmentCreateCO, any>
{
  constructor(private readonly application: AppointmentCreate) {}

  execute(command: AppointmentCreateCO): Promise<any> {
    console.log('command co', command);
    return this.application.create(command);
  }
}
