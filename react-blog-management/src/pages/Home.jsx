import { useState } from "react";
import { useSelector } from "react-redux";

import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";

function Home() {
  const blogs = useSelector((state) => state.blogs.blogs);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  // Filter Blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "" || blog.category === category;

    const matchDate =
      date === "" || blog.date === date;

    return matchSearch && matchCategory && matchDate;
  });

  // Clear Filters
  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="container py-4">

      <h2 className="text-center mb-4">
        📝 Blog Management Dashboard
      </h2>

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Filters */}
      <FilterBar
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
        clearFilters={clearFilters}
      />

      {/* Blog Count */}
      <div className="mb-3">
        <h5>
          Total Blogs: {filteredBlogs.length}
        </h5>
      </div>

      {/* Blog List */}
      {filteredBlogs.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="row">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="col-md-6 col-lg-4 mb-4"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;