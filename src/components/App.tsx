import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { BookList } from "./BookList";
import { BookstoreContext } from "../state/BookStoreContext";
import { useBookStoreContextValue } from "../state/useBookStoreContextValue";
import { BookStoreClientSdk } from "../generated/sdk/BookStoreClientSdk";
import { FetchClientConfiguration } from "@oats-ts/openapi-http-client/lib/fetch";

const sdk = new BookStoreClientSdk(
  new FetchClientConfiguration("http://localhost:5000")
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
