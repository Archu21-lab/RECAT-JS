import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog, updateBlog } from "../redux/blogSlice";
import { useNavigate } from "react-router";

function BlogForm({ editBlog }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: editBlog?.title || "",
    description: editBlog?.description || "",
    category: editBlog?.category || "",
    date: editBlog?.date || "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.category ||
      !blogData.date
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editBlog) {
      dispatch(
        updateBlog({
          id: editBlog.id,
          ...blogData,
        })
      );
    } else {
      dispatch(addBlog(blogData));
    }

    navigate("/");
  };

  return (
    <div className="card shadow p-4">

      <h2 className="text-center mb-4">
        {editBlog ? "Edit Blog" : "Add Blog"}
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Blog Title */}
        <div className="mb-3">
          <label className="form-label">Blog Title</label>

          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter Blog Title"
            value={blogData.title}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            rows="5"
            name="description"
            className="form-control"
            placeholder="Enter Blog Description"
            value={blogData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>

          <select
            name="category"
            className="form-select"
            value={blogData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Redux Toolkit">Redux Toolkit</option>
            <option value="Node JS">Node JS</option>
            <option value="CSS">CSS</option>
          </select>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="form-label">Publish Date</label>

          <input
            type="date"
            name="date"
            className="form-control"
            value={blogData.date}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="d-grid">
          <button className="btn btn-primary">
            {editBlog ? "Update Blog" : "Add Blog"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default BlogForm;