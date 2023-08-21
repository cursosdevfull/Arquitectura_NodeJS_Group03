class Animal {
  raza: string;
  color: string;

  constructor() {
    this.raza = "Husky";
    this.color = "beige";
  }

  getDescription() {
    return `Raza: ${this.raza}. Color: ${this.color}`;
  }
}

class Mamifero extends Animal {
  tipo: string = "Cetáceo";
  readonly createdAt: Date;

  constructor() {
    super();
    this.tipo = "Marsupial";
    this.createdAt = new Date();
  }
}

const mamifero = new Mamifero();
console.log(mamifero.getDescription());
console.log(mamifero.tipo);
