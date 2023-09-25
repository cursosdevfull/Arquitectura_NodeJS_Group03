import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Appointment, COUNTRY_ENUM } from '../../domain/Appointment';
import { AppointmentHistoryByPatient } from '../AppointmentHistoryByPatient';

export class AppointmentListPE implements IQuery {
  constructor(readonly patientId: string) {}
}

@QueryHandler(AppointmentListPE)
export class AppointmentListPEHandler
  implements IQueryHandler<AppointmentListPE, Array<Appointment>>
{
  constructor(private readonly application: AppointmentHistoryByPatient) {}

  async execute(query: AppointmentListPE): Promise<Array<Appointment>> {
    console.log('query pe', query);
    return this.application.getHistory(query.patientId, COUNTRY_ENUM.PE);
  }
}
