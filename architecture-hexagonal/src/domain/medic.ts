import { Address } from './address';

export class Medic {
  name: string;
  lastname: string;
  age: number;
  gender: string;
  specialty: string;
  addresses: Address[];
  phones: string[];

  constructor(
    name: string,
    lastname: string,
    age: number,
    gender: string,
    specialty: string,
    addresses: Address[],
    phones: string[],
  ) {
    if (addresses.length === 0) throw new Error('Addresses cannot be empty');
    if (age < 23) throw new Error('Age cannot be less than 23');
    if (gender !== 'M' && gender !== 'F')
      throw new Error('Gender must be M or F');
    if (phones.length === 0) throw new Error('Phones cannot be empty');
    if (specialty.length === 0) throw new Error('Specialty cannot be empty');
    if (name.length === 0) throw new Error('Name cannot be empty');
    if (lastname.length === 0) throw new Error('Lastname cannot be empty');

    if (name.length < 3)
      throw new Error('Name cannot be less than 3 characters');
    if (lastname.length < 3)
      throw new Error('Lastname cannot be less than 3 characters');

    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.specialty = specialty;
    this.addresses = addresses;
    this.phones = phones;
  }
}
