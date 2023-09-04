import { StoreRepository } from "../ports/store.repository";

export class StoreAdapterInMemory implements StoreRepository {
  isBookAvailable(bookId: number): Promise<boolean> {
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
