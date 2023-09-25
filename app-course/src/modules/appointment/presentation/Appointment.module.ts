import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppointmentCreate } from '../application/AppointmentCreate';
import { AppointmentHistoryByPatient } from '../application/AppointmentHistoryByPatient';
import { AppointmentCreateCOHandler } from '../application/commands/appointment-co.command';
import { AppointmentCreateMXHandler } from '../application/commands/appointment-mx.command';
import { AppointmentCreatePEHandler } from '../application/commands/appointment-pe.command';
import { AppointmentListCOHandler } from '../application/queries/appointment-list-co.query';
import { AppointmentListMXHandler } from '../application/queries/appointment-list-mx.query';
import { AppointmentListPEHandler } from '../application/queries/appointment-list-pe.query';
import { AppointmentInfrastructure } from '../infrastructure/Appointment.infrastructure';
import { AppointmentController } from './Appointment.controller';

const infrastructure = [AppointmentInfrastructure];
const application = [
  AppointmentCreate,
  AppointmentCreateCOHandler,
  AppointmentCreateMXHandler,
  AppointmentCreatePEHandler,
  AppointmentHistoryByPatient,
  AppointmentListCOHandler,
  AppointmentListMXHandler,
  AppointmentListPEHandler,
];
const controllers = [AppointmentController];

@Module({
  imports: [CqrsModule],
  controllers: [...controllers],
  providers: [...infrastructure, ...application],
})
export class AppointmentModule {}
