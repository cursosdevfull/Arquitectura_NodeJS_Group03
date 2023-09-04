import { LibraryApplication } from "./application/library.application";
import { LibraryRepository } from "./domain/repositories/library.repository";
import { StoreRepository } from "./domain/repositories/store.repository";
import { LibraryDataInMemory } from "./infrastructure/library.infrastructure";
import { StoreDataInMemory } from "./infrastructure/store.infrastructure";
import { LibraryApi } from "./presentation/library";

const libraryRepository: LibraryRepository = new LibraryDataInMemory();
const storeRepository: StoreRepository = new StoreDataInMemory();
const libraryApplication = new LibraryApplication(
  libraryRepository,
  storeRepository
);
const libraryApi = new LibraryApi(libraryApplication);

libraryApi.init();
