import { Book } from "./book";

export interface LibraryRepository {
  getAllBooks(): Promise<Book[]>;
}
