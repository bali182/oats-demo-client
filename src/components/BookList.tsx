import { List } from "@mui/material";
import { Book } from "../generated/types/Book";
import { BookListItem } from "./BookListItem";

export type BookListProps = {
  books: Book[];
};

export const BookList = ({ books }: BookListProps) => {
  return (
    <List>
      {books.map((book) => (
        <BookListItem book={book} />
      ))}
    </List>
  );
};
