import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { BookEditorModal } from "./BookEditorModal";
import React, { useCallback, useState } from "react";

export function Header() {
  const [isEditorOpen, setEditorOpen] = useState(false);
  const handleOpenEditor = useCallback(() => setEditorOpen(true), []);
  const handleCloseEditor = useCallback(() => setEditorOpen(false), []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore demo
          </Typography>
          <Button
            color="inherit"
            onClick={handleOpenEditor}
            startIcon={<Add />}
          >
            Add Book
          </Button>
        </Toolbar>
      </AppBar>
      <BookEditorModal
        isOpen={isEditorOpen}
        onClose={handleCloseEditor}
        title="Create new book"
      />
    </>
  );
}
