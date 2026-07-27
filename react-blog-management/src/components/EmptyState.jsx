import { Link } from "react-router";

function EmptyState() {
  return (
    <div className="text-center py-5">

      <img
        src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
        alt="No Blogs"
        width="150"
        className="mb-3"
      />

      <h3>No Blogs Found</h3>

      <p className="text-muted">
        There are no blogs available.
        <br />
        Click the button below to create your first blog.
      </p>

      <Link
        to="/add-blog"
        className="btn btn-primary mt-3"
      >
        + Add New Blog
      </Link>

    </div>
  );
}

export default EmptyState;
