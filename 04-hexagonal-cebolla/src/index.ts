import { LibraryApi } from "./adapters/library-api";
import { LibraryApiRepository } from "./adapters/library-api.repository";
import { LibraryAdapterInMemory } from "./adapters/library.adapter";
import { StoreAdapterInMemory } from "./adapters/store.adapter";
import { LibraryApplication } from "./application/library.application";
import { LibraryRepository } from "./application/library.repository";
import { StoreRepository } from "./application/store.repository";
import { Library } from "./presentation/library";

const libraryApi: LibraryApiRepository = new LibraryApi();
const libraryRepository: LibraryRepository = new LibraryAdapterInMemory();
const storeRepository: StoreRepository = new StoreAdapterInMemory();
const libraryApplication: LibraryApplication = new LibraryApplication(
  libraryRepository,
  storeRepository
);
const library = new Library(libraryApi, libraryApplication);
library.init();
