import BlogForm from "../components/BlogForm";

function AddBlog() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">➕ Add New Blog</h3>
            </div>

            <div className="card-body">
              <BlogForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AddBlog;