class MedicBuilder {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;

  addName(value: string) {
    this.name = value;
    return this;
  }

  addLastname(value: string) {
    this.lastname = value;
    return this;
  }

  addCMP(value: string) {
    this.cmp = value;
    return this;
  }

  addEmail(value: string) {
    this.email = value;
    return this;
  }

  addSpecialty(value: string) {
    this.specialty = value;
    return this;
  }

  addSubSpecialty(value: string) {
    this.subSpecialty = value;
    return this;
  }

  build() {
    return new Medic(this);
  }
}

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

const medic = new MedicBuilder()
  .addName("Jorge")
  .addLastname("Villa")
  .addCMP("abc-1234")
  .addEmail("jorge.villa@email.com")
  .addSpecialty("odontología")
  .addSubSpecialty("odontología pediátrica")
  .build();

console.log(medic.properties());
