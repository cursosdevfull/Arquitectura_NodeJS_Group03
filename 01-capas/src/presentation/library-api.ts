import express from "express";

import { LibraryBusiness } from "../business/library.business";

export class LibraryApi {
  static PORT = 3000;

  constructor(private libraryBusiness = new LibraryBusiness()) {}

  init() {
    return new Promise((resolve, reject) => {
      const app = express();

      app.get("/api/books/availables", async (req, res) => {
        const books = await this.libraryBusiness.getAllBooksAvailable();
        res.json(books);
      });

      app.listen(LibraryApi.PORT, () => {
        console.log(`Server running on port ${LibraryApi.PORT}`);
        resolve(true);
      });
    });
  }
}
