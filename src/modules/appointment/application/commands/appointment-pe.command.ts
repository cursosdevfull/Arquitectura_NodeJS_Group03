import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { AppointmentCreate } from '../AppointmentCreate';

export class AppointmentCreatePE implements ICommand {
  constructor(
    readonly id: string,
    readonly patientId: string,
    readonly medicId: string,
    readonly dateAppointment: Date,
    readonly country: string,
  ) {}
}

@CommandHandler(AppointmentCreatePE)
export class AppointmentCreatePEHandler
  implements ICommandHandler<AppointmentCreatePE, any>
{
  constructor(private readonly application: AppointmentCreate) {}

  execute(command: AppointmentCreatePE): Promise<any> {
    console.log('command pe', command);
    return this.application.create(command);
  }
}
