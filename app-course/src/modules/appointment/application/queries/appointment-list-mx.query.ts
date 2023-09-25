import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Appointment, COUNTRY_ENUM } from '../../domain/Appointment';
import { AppointmentHistoryByPatient } from '../AppointmentHistoryByPatient';

export class AppointmentListMX implements IQuery {
  constructor(readonly patientId: string) {}
}

@QueryHandler(AppointmentListMX)
export class AppointmentListMXHandler
  implements IQueryHandler<AppointmentListMX, Array<Appointment>>
{
  constructor(private readonly application: AppointmentHistoryByPatient) {}

  async execute(query: AppointmentListMX): Promise<Array<Appointment>> {
    console.log('query mx', query);
    return this.application.getHistory(query.patientId, COUNTRY_ENUM.MX);
  }
}
