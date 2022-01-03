import { List } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { Book } from "../generated/types/Book";
import { BookstoreContext } from "../state/BookStoreContext";
import { BookEditorModal } from "./BookEditorModal";
import { BookListItem } from "./BookListItem";

export function BookList() {
  const { books, loadBooks } = useContext(BookstoreContext);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [editedBook, setEditedBook] = useState<Book>();

  const handleModalClose = useCallback(() => {
    setEditorOpen(false);
  }, []);

  const handleEditedBookChange = useCallback((book: Book) => {
    setEditorOpen(true);
    setEditedBook(book);
  }, []);

  useEffect(() => {
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <List>
        {books.map((book) => (
          <BookListItem
            book={book}
            key={book.id}
            onEdit={handleEditedBookChange}
          />
        ))}
      </List>
      <BookEditorModal
        title="Edit Book"
        book={editedBook}
        isOpen={isEditorOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
