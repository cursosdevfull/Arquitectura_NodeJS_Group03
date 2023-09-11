// Domain
class Medic {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Specialty {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class SubSpecialty {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Center {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Patient {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
  /*name: string
    lastname: string
    age: number
    gender: string
    documentType: number
    document: string

    constructor(name: string, lastname: string, age: number, gender: string, documentType: number, document: string) {
        this.name = name
        this.lastname = lastname
        this.age = age
        this.gender = gender
        this.documentType = documentType
        this.document = document
    }*/
}

class Appointment {
  id: number = 0;
  patient: Patient;
  date: Date;
  medic: Medic;
  specialty: Specialty;
  subSpecialty: SubSpecialty;
  center: Center;

  constructor(
    patientId: number,
    date: Date,
    medicId: number,
    specialtyId: number,
    subSpecialtyId: number,
    centerId: number
  ) {
    //if (patientName.length < 4) throw new Error("Patient's name must be greater than 3 characters")
    if (date.getTime() < Date.now())
      throw new Error("Date cannot be less than current date");
    if (medicId < 1) throw new Error("medicId cannot be less than 1");
    if (medicId > 10000)
      throw new Error("medicId cannot be greater than 10000");

    this.patient = new Patient(patientId);
    this.date = date;
    this.medic = new Medic(medicId);
    this.specialty = new Specialty(specialtyId);
    this.subSpecialty = new SubSpecialty(subSpecialtyId);
    this.center = new Center(centerId);
  }
}

interface AppointmentRepository {
  insert(appointment: Appointment): Promise<number>;
  find(appointment: Appointment): Promise<Appointment | undefined>;
}

// Application
class AppointmentCreate {
  constructor(private readonly repository: AppointmentRepository) {}

  async execute(appointment: Appointment) {
    //const infrastructure = new AppointmentInfrastructure()
    const appointmentMatch = await this.repository.find(appointment);
    if (appointmentMatch) throw new Error("Appointment is just scheduled");
    return await this.repository.insert(appointment);
  }
}

// Infrastructure
class AppointmentInfrastructure implements AppointmentRepository {
  appointments: Appointment[] = [];

  async insert(appointment: Appointment) {
    appointment.id = Math.floor(Math.random() * 1000 + 1);
    const appointmentToInsert: Appointment = appointment;
    this.appointments.push(appointmentToInsert);

    console.log("allAppointments", this.appointments);

    return Promise.resolve(appointment.id);
  }

  async find(appointment: Appointment) {
    return Promise.resolve(
      this.appointments.find((appointmentItem) => {
        const condition1 = appointmentItem.medic.id === appointment.medic.id;
        const condition2 =
          appointmentItem.specialty.id === appointment.specialty.id;
        const condition3 =
          appointmentItem.subSpecialty.id === appointment.subSpecialty.id;
        const condition4 =
          appointmentItem.date.getTime() === appointment.date.getTime();

        return condition1 && condition2 && condition3 && condition4;
      })
    );
  }

  validateAppointmentCreated() {
    return false;
  }
}

(async () => {
  const appointment = new Appointment(
    34,
    new Date("2023-09-11T15:00:00Z"),
    40,
    23,
    4,
    4
  );
  console.log("appointment", appointment);
  const repository: AppointmentRepository = new AppointmentInfrastructure();
  const application = new AppointmentCreate(repository);
  const appointmentId = await application.execute(appointment);

  const appointment2 = new Appointment(
    34,
    new Date("2023-09-11T15:00:00Z"),
    50,
    23,
    4,
    4
  );
  console.log("appointment2", appointment2);
  const appointmentId2 = await application.execute(appointment2);
})();
