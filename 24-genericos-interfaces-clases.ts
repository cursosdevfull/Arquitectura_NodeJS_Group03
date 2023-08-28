class Medic {
  constructor(
    public id: number,
    public name: string,
    public lastname: string
  ) {}
}

class User {
  constructor(public id: number, public fullName: string) {}
}

class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string
  ) {}
}

class Category {
  constructor(
    public id: number,
    public title: string,
    public products: Product[]
  ) {}
}

interface Repository<Entity> {
  create(entity: Entity): Promise<Entity>;
}

interface RepositoryCategory extends Repository<Category> {
  report(): Promise<Array<Category>>;
}

class CategoryUseCase implements RepositoryCategory {
  private repository: RepositoryCategory;

  constructor(repository: RepositoryCategory) {
    this.repository = repository;
  }

  report(): Promise<Category[]> {
    return this.repository.report();
  }
  create(entity: Category): Promise<Category> {
    return this.repository.create(entity);
  }
}

class Create<Entity> {
  private repository: Repository<Entity>;

  constructor(repository: Repository<Entity>) {
    this.repository = repository;
  }

  async execute(entity: Entity) {
    const created = await this.repository.create(entity);
    return created;
  }
}

class DataAccess<Entity> implements Repository<Entity> {
  protected items: Entity[] = [];
  logger: any;

  create(item: Entity): Promise<Entity> {
    this.items.push(item);
    return Promise.resolve(item);
  }
}

class CategoryDataAccess
  extends DataAccess<Category>
  implements RepositoryCategory
{
  report(): Promise<Category[]> {
    return Promise.resolve(this.items);
  }
}

(async () => {
  const medic = new Medic(1, "Ana", "Cortez");
  const repositoryMedic: Repository<Medic> = new DataAccess<Medic>();
  const medicCreate = new Create<Medic>(repositoryMedic);
  const medicInserted = await medicCreate.execute(medic);
  console.log(medicInserted);

  const user = new User(1, "Javier León");
  const repositoryUser: Repository<User> = new DataAccess<User>();
  const userCreate = new Create<User>(repositoryUser);
  const userInserted = await userCreate.execute(user);
  console.log(userInserted);

  const product = new Product(
    1,
    "Súper desengrasante",
    "Saca la grasa de las parrillas"
  );
  const repositoryProduct: Repository<Product> = new DataAccess<Product>();
  const productCreate = new Create<Product>(repositoryProduct);
  const productInserted = await productCreate.execute(product);
  console.log(productInserted);

  const category = new Category(1, "Panadería", [
    new Product(
      1,
      "Encendedor ecológico",
      "Encendedor de parrilla ultra rápido"
    ),
  ]);
  const repositoryCategory: RepositoryCategory = new CategoryDataAccess();
  const categoryUseCase = new CategoryUseCase(repositoryCategory);
  const categoryCreated = await categoryUseCase.create(category);
  const categoryReported = await categoryUseCase.report();
  console.log(categoryCreated);
  console.log(categoryReported);
})();
