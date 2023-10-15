import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, ICommand, IQuery, QueryBus } from '@nestjs/cqrs';

import { AppointmentCreateCO } from '../application/commands/appointment-co.command';
import { AppointmentCreateMX } from '../application/commands/appointment-mx.command';
import { AppointmentCreatePE } from '../application/commands/appointment-pe.command';
import { AppointmentListCO } from '../application/queries/appointment-list-co.query';
import { AppointmentListMX } from '../application/queries/appointment-list-mx.query';
import { AppointmentListPE } from '../application/queries/appointment-list-pe.query';
import { ApppointmentCreateDto } from './dtos/appointment-create.dto';
import { ApppointmentHistoryDto } from './dtos/appointment-history.dto';

interface ICommandMap {
  [key: string]: { new (...args: any[]): ICommand };
}

interface IQueryMap {
  [key: string]: { new (...args: any[]): IQuery };
}

const commandMap: ICommandMap = {
  CO: AppointmentCreateCO,
  MX: AppointmentCreateMX,
  PE: AppointmentCreatePE,
};

const queryMap: IQueryMap = {
  CO: AppointmentListCO,
  MX: AppointmentListMX,
  PE: AppointmentListPE,
};

@Controller('appointment')
export class AppointmentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() body: ApppointmentCreateDto) {
    const { id, patientId, medicId, dateAppointment, country } = body;

    const command: ICommand = new commandMap[country](
      id,
      patientId,
      medicId,
      dateAppointment,
      country,
    );

    const appointmentCreated = await this.commandBus.execute(command);

    return appointmentCreated;
  }

  @Get('/:country/:patientId')
  async getHistory(@Param() param: ApppointmentHistoryDto) {
    const { patientId, country } = param;

    const query: IQuery = new queryMap[country](patientId);

    const appointmentHistory = await this.queryBus.execute(query);

    return appointmentHistory;
  }
}
