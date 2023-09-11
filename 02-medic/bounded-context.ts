// domain
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

class Medic {
  id: number = 0;
  name: string;
  lastname: string;
  age: number;
  gender: string;
  specialty: Specialty;
  subSpecialty: SubSpecialty;
  cmp: string;
  documentType: number;
  document: string;

  constructor(
    name: string,
    lastname: string,
    age: number,
    gender: string,
    specialtyId: number,
    subSpecialtyId: number,
    cmp: string,
    documentType: number,
    document: string
  ) {
    if (age < 20) throw new Error("Age must be greater than 20");
    if (documentType !== 1 && documentType !== 2 && documentType !== 3)
      throw new Error("DocumentType must be 1, 2 or 3");
    if (cmp.length < 5 || cmp.length > 5)
      throw new Error("Length of CMP cannot be greater or less than 5");

    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.specialty = new Specialty(specialtyId);
    this.subSpecialty = new SubSpecialty(subSpecialtyId);
    this.cmp = cmp;
    this.documentType = documentType;
    this.document = document;
  }
}

interface MedicRepository {
  insert(medic: Medic): Promise<number>;
  find(medic: Medic): Promise<Medic | undefined>;
}

// application
class MedicCreate {
  constructor(private readonly repository: MedicRepository) {}

  async execute(medic: Medic) {
    const medicMatched = await this.repository.find(medic);
    if (medicMatched) throw new Error("CMP must be unique");

    return await this.repository.insert(medic);
  }
}

// infrastructure
class MedicInfrastructure implements MedicRepository {
  medics: Medic[] = [];

  insert(medic: Medic): Promise<number> {
    medic.id = Math.floor(Math.random() * 1000 + 1);
    this.medics.push(medic);

    console.log("medics", this.medics);

    return Promise.resolve(medic.id);
  }
  find(medic: Medic): Promise<Medic | undefined> {
    return Promise.resolve(
      this.medics.find((medicItem) => medicItem.cmp === medic.cmp)
    );
  }
}

(async () => {
  const medic = new Medic(
    "Javier",
    "Urteaga",
    45,
    "M",
    10,
    15,
    "25456",
    1,
    "10254563"
  );
  const repository: MedicRepository = new MedicInfrastructure();
  const application: MedicCreate = new MedicCreate(repository);
  await application.execute(medic);

  const medic2 = new Medic(
    "Javier",
    "Urteaga",
    45,
    "M",
    10,
    15,
    "15457",
    1,
    "10254563"
  );
  await application.execute(medic2);
})();
