import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Book } from "../generated/types/Book";
import { BookType } from "../generated/types/BookType";
import { BookstoreContext } from "../state/BookStoreContext";

type BookEditorModalProps = {
  book?: Book;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

const emptyBook: Book = {
  id: -1,
  price: 0,
  bookType: "paperback",
  author: "",
  title: "",
  description: "",
};

export function BookEditorModal({
  book: bookProp,
  isOpen,
  title,
  onClose,
}: BookEditorModalProps) {
  const [book, setBook] = useState(emptyBook);
  const { createBook, updateBook } = useContext(BookstoreContext);

  useEffect(() => {
    setBook(bookProp ?? emptyBook);
  }, [bookProp]);

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBook((b) => ({ ...b, price: Number(e.target.value) }));
    },
    []
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBook((b) => ({ ...b, title: e.target.value }));
    },
    []
  );

  const handleAuthorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBook((b) => ({ ...b, author: e.target.value }));
    },
    []
  );

  const handleTypeChange = useCallback((e: SelectChangeEvent<any>) => {
    setBook((b) => ({ ...b, bookType: e.target.value as BookType }));
  }, []);

  const handleSave = useCallback(async () => {
    if (bookProp === undefined) {
      await createBook(book);
    } else {
      await updateBook(book);
    }
    onClose();
  }, [book, bookProp, createBook, onClose, updateBook]);

  const handleClose = useCallback(async () => {
    onClose();
  }, [onClose]);

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box>
          <div>
            <FormControl fullWidth={true}>
              <FormLabel>Title</FormLabel>
              <OutlinedInput
                fullWidth={true}
                type="string"
                value={book.title}
                onChange={handleTitleChange}
              />
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth={true}>
              <FormLabel>Author</FormLabel>
              <OutlinedInput
                fullWidth={true}
                type="string"
                value={book.author}
                onChange={handleAuthorChange}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <OutlinedInput
                fullWidth={true}
                type="number"
                value={book.price}
                onChange={handlePriceChange}
                endAdornment={
                  <InputAdornment position="start">EUR</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth={true}>
              <FormLabel>Type</FormLabel>
              <Select
                fullWidth={true}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={book.bookType}
                onChange={handleTypeChange}
              >
                <MenuItem value={"paperback"}>Paperback</MenuItem>
                <MenuItem value={"digital"}>Digital</MenuItem>
                <MenuItem value={"audio"}>Audio</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Close
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
