import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router";
import BlogForm from "../components/BlogForm";

function EditBlog() {
  const { id } = useParams();

  const blogs = useSelector((state) => state.blogs.blogs);

  const editBlog = blogs.find((blog) => blog.id === id);

  if (!editBlog) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-warning">
              <h3 className="mb-0">✏️ Edit Blog</h3>
            </div>

            <div className="card-body">
              <BlogForm editBlog={editBlog} />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default EditBlog;