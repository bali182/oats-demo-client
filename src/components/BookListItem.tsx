import React, { useCallback } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Book as BookIcon, Edit } from "@mui/icons-material";
import { Book } from "../generated/types/Book";

export type BookListItemProps = {
  book: Book;
  onEdit: (book: Book) => void;
};

export function BookListItem({ book, onEdit }: BookListItemProps) {
  const { title, author, price } = book;
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onEdit(book);
    },
    [book, onEdit]
  );
  return (
    <>
      <ListItemButton>
        <ListItem
          onClick={handleClick}
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={handleClick}>
              <Edit />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <BookIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${title} by ${author}`}
            secondary={`${price} EUR`}
          />
        </ListItem>
      </ListItemButton>
      <Divider component="li" />
    </>
  );
}
