import { StoreRepository } from "../domain/repositories/store.repository";

export class StoreDataInMemory implements StoreRepository {
  isBookAvailable(bookId: number): Promise<boolean> {
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
