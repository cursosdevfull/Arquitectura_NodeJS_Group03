import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { AppointmentCreate } from '../AppointmentCreate';

export class AppointmentCreateMX implements ICommand {
  constructor(
    readonly id: string,
    readonly patientId: string,
    readonly medicId: string,
    readonly dateAppointment: Date,
    readonly country: string,
  ) {}
}

@CommandHandler(AppointmentCreateMX)
export class AppointmentCreateMXHandler
  implements ICommandHandler<AppointmentCreateMX, any>
{
  constructor(private readonly application: AppointmentCreate) {}

  execute(command: AppointmentCreateMX): Promise<any> {
    console.log('command mx', command);
    return this.application.create(command);
  }
}
