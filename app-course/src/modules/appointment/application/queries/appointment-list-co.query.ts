import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Appointment, COUNTRY_ENUM } from '../../domain/Appointment';
import { AppointmentHistoryByPatient } from '../AppointmentHistoryByPatient';

export class AppointmentListCO implements IQuery {
  constructor(readonly patientId: string) {}
}

@QueryHandler(AppointmentListCO)
export class AppointmentListCOHandler
  implements IQueryHandler<AppointmentListCO, Array<Appointment>>
{
  constructor(private readonly application: AppointmentHistoryByPatient) {}

  async execute(query: AppointmentListCO): Promise<Array<Appointment>> {
    console.log('query co', query);
    return this.application.getHistory(query.patientId, COUNTRY_ENUM.CO);
  }
}
