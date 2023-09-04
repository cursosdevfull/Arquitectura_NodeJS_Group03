export class Address {
  street: string;
  number: number;
  city: string;
  country: string;

  constructor(street: string, number: number, city: string, country: string) {
    if (street.length === 0) throw new Error('Street cannot be empty');
    if (number < 1) throw new Error('Number cannot be less than 1');
    if (city.length === 0) throw new Error('City cannot be empty');
    if (country.length === 0) throw new Error('Country cannot be empty');

    if (street.length < 3)
      throw new Error('Street cannot be less than 3 characters');
    if (city.length < 3)
      throw new Error('City cannot be less than 3 characters');
    if (country.length < 3)
      throw new Error('Country cannot be less than 3 characters');

    this.street = street;
    this.number = number;
    this.city = city;
    this.country = country;
  }
}
