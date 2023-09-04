import { LibraryApiRepository } from "../adapters/library-api.repository";
import { LibraryApplication } from "../application/library.application";

export class Library {
  constructor(
    private readonly libraryApiRepository: LibraryApiRepository,
    private libraryApplication: LibraryApplication
  ) {}

  init() {
    this.libraryApiRepository.installGetAvailableBooks(() =>
      this.libraryApplication.getBooksAvailable()
    );
  }
}
