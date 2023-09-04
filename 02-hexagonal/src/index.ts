import { LibraryApiAdapter } from "./adapters/library-api.adapter";
import { LibraryAdapterInMemory } from "./adapters/library.adapter";
import { StoreAdapterInMemory } from "./adapters/store.adapter";
import { Library } from "./library";
import { LibraryAplication } from "./library.application";

const library = new Library(
  new LibraryApiAdapter(),
  new LibraryAplication(
    new LibraryAdapterInMemory(),
    new StoreAdapterInMemory()
  )
);

library.init();
