import { Book } from "./ports/book";
import { LibraryRepository } from "./ports/library.repository";
import { StoreRepository } from "./ports/store.repository";

export class LibraryAplication {
  constructor(
    private libraryRepository: LibraryRepository,
    private storeRepository: StoreRepository
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
