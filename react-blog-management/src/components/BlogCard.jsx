import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../redux/blogSlice";

function BlogCard({ blog }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      dispatch(deleteBlog(blog.id));
    }
  };

  return (
    <div className="card shadow-sm h-100">

      <div className="card-body">

        <h4 className="card-title fw-bold">
          {blog.title}
        </h4>

        <span className="badge bg-primary mb-3">
          {blog.category}
        </span>

        <p className="card-text">
          {blog.description}
        </p>

      </div>

      <div className="card-footer bg-white">

        <small className="text-muted">
          📅 {blog.date}
        </small>

        <div className="d-flex justify-content-between mt-3">

          <Link
            to={`/edit-blog/${blog.id}`}
            className="btn btn-warning"
          >
            Edit
          </Link>

          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default BlogCard;