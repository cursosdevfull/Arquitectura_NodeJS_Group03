type STATE_BOOK = "NEW" | "GOOD" | "REGULAR";

interface IBook {
  id: number;
  title: string;
  state: STATE_BOOK;
  isAvailable: boolean;
}

class Stock {
  private static listBooks: Array<IBook> = [
    { id: 1, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 2, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 3, title: "NodeJS", state: "GOOD", isAvailable: true },
    { id: 4, title: "NodeJS", state: "REGULAR", isAvailable: true },
    { id: 5, title: "Angular", state: "NEW", isAvailable: true },
    { id: 6, title: "Angular", state: "NEW", isAvailable: false },
    { id: 7, title: "Angular", state: "NEW", isAvailable: true },
    { id: 8, title: "Angular", state: "REGULAR", isAvailable: true },
    { id: 10, title: "Typescript", state: "NEW", isAvailable: true },
    { id: 11, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 12, title: "Typescript", state: "REGULAR", isAvailable: false },
    { id: 13, title: "Typescript", state: "REGULAR", isAvailable: true },
  ];

  static getBooks(): Array<IBook> {
    return this.listBooks;
  }
}

abstract class SearchBook {
  listBooks: Array<IBook>;

  constructor() {
    this.listBooks = Stock.getBooks();
  }

  updateAvailability(id: number, available: boolean) {
    const bookMatched = this.listBooks.find((book: IBook) => book.id === id);
    if (bookMatched) bookMatched.isAvailable = available;
  }

  findByStates(title: string, ...states: Array<STATE_BOOK>) {
    let position = 0;
    let bookMatched: IBook | undefined;

    while (position < states.length) {
      bookMatched = this.listBooks.find(
        (book: IBook) =>
          book.title === title &&
          book.state === states[position] &&
          book.isAvailable
      );
      position++;

      if (bookMatched) break;
    }

    if (bookMatched) this.updateAvailability(bookMatched.id, false);

    return bookMatched;
  }

  abstract findBook(title: string): IBook;
}

class Student extends SearchBook {
  findBook(title: string): IBook {
    return this.findByStates(title, "REGULAR", "GOOD", "NEW") as IBook;
  }
}

class Teacher extends SearchBook {
  findBook(title: string): IBook {
    return this.findByStates(title, "GOOD", "REGULAR", "NEW") as IBook;
  }
}

class Associate extends SearchBook {
  findBook(title: string): IBook {
    return this.findByStates(title, "NEW", "GOOD", "REGULAR") as IBook;
  }
}

class Strategy {
  findBookByRole(role: SearchBook, title: string) {
    return role.findBook(title);
  }
}

const strategy = new Strategy();

const student = new Student();
const teacher = new Teacher();
const associate = new Associate();

const book1: IBook = strategy.findBookByRole(student, "NodeJS");
const book2: IBook = strategy.findBookByRole(teacher, "NodeJS");
const book3: IBook = strategy.findBookByRole(associate, "NodeJS");

console.log("book1", book1);
console.log("book2", book2);
console.log("book3", book3);
