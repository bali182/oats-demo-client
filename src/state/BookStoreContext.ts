import { createContext } from "react";
import { AppError } from "../generated/types/AppError";
import { Book } from "../generated/types/Book";

export type BookStoreContextType = {
  books: Book[];
  issues: AppError[];
  createBook: (book: Book) => Promise<void>;
  updateBook: (book: Book) => Promise<void>;
  loadBooks: () => Promise<void>;
};

export const BookstoreContext = createContext<BookStoreContextType>({
  books: [],
  issues: [],
  createBook: async () => {},
  loadBooks: async () => {},
  updateBook: async () => {},
});
