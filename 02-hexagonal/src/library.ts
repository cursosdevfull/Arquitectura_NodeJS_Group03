import { LibraryAplication } from "./library.application";
import { LibraryApiRepository } from "./ports/library-api.repository";

export class Library {
  constructor(
    private readonly libraryApi: LibraryApiRepository,
    private readonly libraryApplication: LibraryAplication
  ) {}

  init() {
    this.libraryApi.installGetAvailableBooks(() =>
      this.libraryApplication.getBooksAvailable()
    );
  }
}
