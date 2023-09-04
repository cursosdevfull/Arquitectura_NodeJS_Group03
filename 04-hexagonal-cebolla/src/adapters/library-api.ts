import { Book } from "@/entities/book";
import express from "express";

import { LibraryApiRepository } from "./library-api.repository";

export class LibraryApi implements LibraryApiRepository {
  static PORT = 3000;
  api = express();

  constructor() {
    this.api.listen(LibraryApi.PORT, () => {
      console.log(`Library listening at http://localhost:${LibraryApi.PORT}`);
    });
  }

  installGetAvailableBooks(callback: () => Promise<Book[]>) {
    this.api.get("/api/books/availables", async (req, res) => {
      const books = await callback();
      res.json(books);
    });
  }
}
