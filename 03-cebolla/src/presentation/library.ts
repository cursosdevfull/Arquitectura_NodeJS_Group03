import express from "express";

import { LibraryApplication } from "../application/library.application";

export class LibraryApi {
  static PORT = 3000;
  api = express();

  constructor(private readonly libraryApplication: LibraryApplication) {}

  init() {
    this.api.get("/api/books/availables", async (req, res) => {
      const books = await this.libraryApplication.getBooksAvailable();
      res.json(books);
    });

    this.api.listen(LibraryApi.PORT, () => {
      console.log(`Server running at http://localhost:${LibraryApi.PORT}`);
    });
  }
}
