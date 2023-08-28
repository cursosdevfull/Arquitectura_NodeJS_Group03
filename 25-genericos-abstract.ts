abstract class AbstractEntity<Entity, TypePrimaryKey> {
  insert(entity: Entity): Promise<Entity> {
    return Promise.resolve(entity);
  }

  update(id: TypePrimaryKey, entity: Entity): Promise<Entity> {
    return Promise.resolve(entity);
  }
}

class Medic {
  constructor(
    public id: number,
    public name: string,
    public lastname: string
  ) {}
}

class MedicDataAccess extends AbstractEntity<Medic, number> {
  report(): Promise<string> {
    return Promise.resolve("Medic report");
  }
}
