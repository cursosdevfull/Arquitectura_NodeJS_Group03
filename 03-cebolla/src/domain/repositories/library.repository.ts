import { Book } from "../model/book";

export interface LibraryRepository {
  getAllBooks(): Promise<Book[]>;
}
