import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { i, book } = action.payload;
      state.books[i] = book;
    },
    removeBook: (state, action) => {},
  },
});
