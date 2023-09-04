import { Book } from "../entities/book";

export interface LibraryRepository {
  getAllBooks(): Promise<Book[]>;
}
