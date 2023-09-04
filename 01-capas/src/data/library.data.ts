export class LibraryDataInMemory {
  getAllBooks(): Promise<Array<Book>> {
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

export class Book {
  bookId: number;
  subject: Subject;
}

export type Subject = "Angular" | "React" | "Vue" | "Svelte" | "NodeJS";
