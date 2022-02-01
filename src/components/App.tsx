import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { BookList } from "./BookList";
import { BookstoreContext } from "../state/BookStoreContext";
import { useBookStoreContextValue } from "../state/useBookStoreContextValue";
import { BookStoreSdkImpl } from "../generated/sdk/BookStoreSdkImpl";
import { FetchClientAdapter } from "@oats-ts/openapi-fetch-client-adapter";

const sdk = new BookStoreSdkImpl(
  new FetchClientAdapter("http://localhost:5000")
);

export function App() {
  return (
    <BookstoreContext.Provider value={useBookStoreContextValue(sdk)}>
      <Box>
        <Header />
        <BookList />
      </Box>
    </BookstoreContext.Provider>
  );
}
