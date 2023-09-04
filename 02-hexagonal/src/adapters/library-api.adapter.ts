import { Book } from "@/ports/book";
import express from "express";

import { LibraryApiRepository } from "../ports/library-api.repository";

export class LibraryApiAdapter implements LibraryApiRepository {
  static PORT = 3000;

  constructor(private app = express()) {
    this.app.listen(LibraryApiAdapter.PORT, () => {
      console.log(
        `Library API listening at http://localhost:${LibraryApiAdapter.PORT}`
      );
    });
  }

  installGetAvailableBooks(callback: () => Promise<Book[]>): void {
    this.app.get("/api/books/availables", async (req, res) => {
      const books = await callback();
      res.json(books);
    });
  }
}
