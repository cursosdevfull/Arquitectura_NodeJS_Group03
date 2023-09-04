import { Book } from "@/domain/model/book";

import { LibraryRepository } from "../domain/repositories/library.repository";
import { StoreRepository } from "../domain/repositories/store.repository";

export class LibraryApplication {
  constructor(
    private readonly libraryRepository: LibraryRepository,
    private readonly storeRepository: StoreRepository
  ) {}

  async getBooksAvailable(): Promise<Array<Book>> {
    const books = await this.libraryRepository.getAllBooks();
    const booksAvailable: Array<Book> = [];

    for (const book of books) {
      const isAvailable = await this.storeRepository.isBookAvailable(
        book.bookId
      );
      if (isAvailable) booksAvailable.push(book);
    }

    return booksAvailable;
  }
}
