import React from "react";
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
};

export const BookListItem = ({ book }: BookListItemProps) => {
  const { title, author, price } = book;
  return (
    <>
      <ListItemButton>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
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
};
