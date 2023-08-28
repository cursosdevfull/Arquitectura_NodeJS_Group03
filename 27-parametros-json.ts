type MedicProperties = {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;
};

class Medic {
  private name: string;
  private lastname: string;
  private cmp: string;
  private email: string;
  private specialty: string;
  private subSpecialty: string;

  //constructor(name: string, lastname: string, cmp: string, email: string, specialty: string, subSpecialty: string) {
  constructor(properties: MedicProperties) {
    this.name = properties.name;
    this.lastname = properties.lastname;
    this.cmp = properties.cmp;
    this.email = properties.email;
    this.specialty = properties.specialty;
    this.subSpecialty = properties.subSpecialty;
  }

  properties() {
    return {
      name: this.name,
      lastname: this.lastname,
      cmp: this.cmp,
      email: this.email,
      specialty: this.specialty,
      subSpecialty: this.subSpecialty,
    };
  }
}
const properties: MedicProperties = {
  name: "Javier",
  email: "javier.acuna@correo.com",
  specialty: "cardiología",
  lastname: "Acuña",
  cmp: "abc-123",
  subSpecialty: "cardiología geriátrica",
};
//const medic = new Medic("Javier", "Acuña", "abc-123", "javier.acuna@correo.com", "cardiología", "cardiología geriática")
const medic = new Medic(properties);
console.log(medic.properties());
