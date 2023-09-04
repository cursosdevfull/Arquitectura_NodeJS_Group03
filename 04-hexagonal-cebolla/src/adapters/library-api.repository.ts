import { Book } from "../entities/book";

export interface LibraryApiRepository {
  installGetAvailableBooks: (callback: () => Promise<Array<Book>>) => void;
}
