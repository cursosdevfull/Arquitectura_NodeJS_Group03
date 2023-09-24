import { AppointmentController } from "./commands/appointment.controller";
import { CommandBus } from "./commands/CommandBus";
import { AppointmentCOHandler } from "./commands/handlers/appointment-co.handler";
import { AppointmentMXHandler } from "./commands/handlers/appointment-mx.handler";
import { AppointmentPEHandler } from "./commands/handlers/appointment-pe.handler";

const commandBus: CommandBus = CommandBus.create();
commandBus.registerHandler(new AppointmentMXHandler());
commandBus.registerHandler(new AppointmentCOHandler());
commandBus.registerHandler(new AppointmentPEHandler());

const controller = new AppointmentController(commandBus);
controller.addAppointment("CO", new Date(), 1, 1);
