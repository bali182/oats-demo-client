import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { BookList } from "./BookList";

function App() {
  return (
    <Box>
      <Header />
      <BookList books={[]} />
    </Box>
  );
}

export default App;
