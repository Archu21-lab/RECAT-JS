import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadBlogs = () => {
  const blogs = localStorage.getItem("blogs");
  return blogs ? JSON.parse(blogs) : [];
};

const saveBlogs = (blogs) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

const initialState = {
  blogs: loadBlogs(),
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,

  reducers: {
    // Add Blog
    addBlog: (state, action) => {
      const newBlog = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        date: action.payload.date,
      };

      state.blogs.push(newBlog);
      saveBlogs(state.blogs);
    },

    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(
        (blog) => blog.id !== action.payload
      );

      saveBlogs(state.blogs);
    },

    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );

      if (index !== -1) {
        state.blogs[index] = action.payload;
        saveBlogs(state.blogs);
      }
    },
  },
});

export const {
  addBlog,
  deleteBlog,
  updateBlog,
} = blogSlice.actions;

export default blogSlice.reducer;