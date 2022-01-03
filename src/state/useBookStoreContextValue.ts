import { useCallback, useState } from "react";
import { BookStoreSdk } from "../generated/sdk/BookStoreSdk";
import { AppError } from "../generated/types/AppError";
import { Book } from "../generated/types/Book";
import { BookStoreContextType } from "./BookStoreContext";

export function useBookStoreContextValue(
  sdk: BookStoreSdk
): BookStoreContextType {
  const [books, setBooks] = useState<Book[]>([]);
  const [issues, setIssues] = useState<AppError[]>([]);

  const loadBooks = useCallback(async () => {
    const response = await sdk.getBooks();
    if (response.statusCode === 200) {
      setBooks(response.body);
    } else {
      setIssues(response.body);
    }
  }, [sdk]);

  const createBook = useCallback(
    async (book: Book) => {
      const response = await sdk.createBook({
        body: book,
        mimeType: "application/json",
      });
      if (response.statusCode === 201) {
        await loadBooks();
      } else {
        setIssues(response.body);
      }
    },
    [loadBooks, sdk]
  );

  const updateBook = useCallback(
    async (book: Book) => {
      const response = await sdk.updateBook({
        body: book,
        path: { bookId: book.id },
        mimeType: "application/json",
      });
      if (response.statusCode === 200) {
        await loadBooks();
      } else {
        setIssues(response.body);
      }
    },
    [loadBooks, sdk]
  );

  return {
    books,
    issues,
    loadBooks,
    createBook,
    updateBook,
  };
}
