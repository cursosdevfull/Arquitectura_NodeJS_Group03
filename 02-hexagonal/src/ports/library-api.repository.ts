import { Book } from "./book";

export interface LibraryApiRepository {
  installGetAvailableBooks(callback: () => Promise<Array<Book>>): void;
}
