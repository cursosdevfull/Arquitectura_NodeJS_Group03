import { v4 as uuidv4 } from "uuid";

export class Entity {
  protected _id: string;

  constructor(id?: string) {
    this._id = id ? id : uuidv4();
  }
}
