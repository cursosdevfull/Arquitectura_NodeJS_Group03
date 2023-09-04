import { StoreRepository } from "../application/store.repository";

export class StoreAdapterInMemory implements StoreRepository {
  isBookAvailable(bookId: number) {
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
