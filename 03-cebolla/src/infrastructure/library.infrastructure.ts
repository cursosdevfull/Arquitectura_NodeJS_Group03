import { Book } from "@/domain/model/book";

import { LibraryRepository } from "../domain/repositories/library.repository";

export class LibraryDataInMemory implements LibraryRepository {
  getAllBooks(): Promise<Book[]> {
    return Promise.resolve([
      { bookId: 1, subject: "Angular" },
      { bookId: 2, subject: "React" },
      { bookId: 3, subject: "Vue" },
      { bookId: 4, subject: "Svelte" },
      { bookId: 5, subject: "NodeJS" },
    ]);
  }
}
