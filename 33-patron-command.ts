interface IPayload {
  payload: Record<string, any>;
}

abstract class Command {
  protected target: string;
  protected message: IPayload;
  protected isoCountry: "CO" | "PE" | "CL" | "MX";

  execute() {
    console.log(
      `Target: ${this.target} - Message: ${JSON.stringify(this.message)}`
    );
  }
}

interface IAppointmentColombia {
  patient: string;
  date: Date;
  medicId: number;
  specialtyId: number;
  insurance: string;
}

interface IAppointmentPeru {
  patientName: string;
  patientLastname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
}

interface IAppointmentChile {
  patientFullname: string;
  date: Date;
  medicId: number;
  specialty: number;
  centerId: number;
}

interface IAppointmentMexico {
  patientName: string;
  patientLastname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
  insuranceId: number;
  centerId: number;
}

class AppointmentColombia extends Command {
  target = "AppointmentColombia";
  message = { payload: {} };

  constructor(appointment: IAppointmentColombia) {
    super();
    this.message.payload = appointment;
  }
}

class AppointmentPeru extends Command {
  target = "AppointmentPeru";
  message = { payload: {} };

  constructor(appointment: IAppointmentPeru) {
    super();
    this.message.payload = appointment;
  }
}

class AppointmentChile extends Command {
  target = "AppointmentChile";
  message = { payload: {} };

  constructor(appointment: IAppointmentChile) {
    super();
    this.message.payload = appointment;
  }
}

class AppointmentMexico extends Command {
  target = "AppointmentMexico";
  message = { payload: {} };

  constructor(appointment: IAppointmentMexico) {
    super();
    this.message.payload = appointment;
  }
}

const targets: Array<Command> = [
  new AppointmentColombia({
    patient: "Javier Otelo",
    date: new Date(),
    medicId: 1,
    specialtyId: 10,
    insurance: "seguro particular",
  }),
  new AppointmentPeru({
    patientName: "Katia",
    patientLastname: "Venturo",
    date: new Date(),
    medicId: 3,
    specialtyId: 56,
  }),
  new AppointmentChile({
    patientFullname: "María Paredes",
    date: new Date(),
    medicId: 45,
    specialty: 9,
    centerId: 4,
  }),
  new AppointmentMexico({
    patientName: "Jimena",
    patientLastname: "Espinoza",
    date: new Date(),
    medicId: 43,
    specialtyId: 78,
    insuranceId: 8,
    centerId: 3,
  }),
];

targets.forEach((item: Command) => item.execute());
