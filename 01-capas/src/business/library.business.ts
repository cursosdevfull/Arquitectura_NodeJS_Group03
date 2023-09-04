import { Book, LibraryDataInMemory } from "../data/library.data";
import { StoreDataInMemory } from "../data/store.data";

export class LibraryBusiness {
  constructor(
    private storeData: StoreDataInMemory = new StoreDataInMemory(),
    private libraryData: LibraryDataInMemory = new LibraryDataInMemory()
  ) {}
  async getAllBooksAvailable(): Promise<Array<Book>> {
    const books = await this.libraryData.getAllBooks();
    const booksAvailable: Book[] = [];

    for (const book of books) {
      const isAvailable = await this.storeData.isBookAvailable(book.bookId);
      if (isAvailable) booksAvailable.push(book);
    }

    return booksAvailable;
  }
}
