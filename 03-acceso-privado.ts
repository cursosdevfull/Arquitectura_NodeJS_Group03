class Animal {
  private raza: string;
  private color: string;

  constructor() {
    this.raza = "Husky";
    this.color = "beige";
  }

  public getDescription() {
    this.toUpper();
    return `Raza: ${this.raza}. Color: ${this.color}`;
  }

  private toUpper() {
    return this.raza.toUpperCase();
  }
}

const animal = new Animal();

//console.log("raza", animal.raza)
//console.log("color", animal.color)
console.log("description", animal.getDescription());
//console.log(animal.toUpper())
