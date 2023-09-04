export class StoreDataInMemory {
  isBookAvailable(bookId: number): Promise<boolean> {
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
