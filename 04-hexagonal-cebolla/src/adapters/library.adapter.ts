import { Book } from "@/entities/book";

import { LibraryRepository } from "../application/library.repository";

export class LibraryAdapterInMemory implements LibraryRepository {
  getAllBooks(): Promise<Book[]> {
    return Promise.resolve([
      {
        bookId: 1,
        subject: "Angular",
      },
      {
        bookId: 2,
        subject: "React",
      },
      {
        bookId: 3,
        subject: "Vue",
      },
      {
        bookId: 4,
        subject: "Svelte",
      },
      {
        bookId: 5,
        subject: "NodeJS",
      },
    ]);
  }
}
