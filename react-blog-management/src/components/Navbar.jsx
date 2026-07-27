import { Link, useLocation } from "react-router";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    📝 Blog Management
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >


                    <div className="d-flex mt-3  justify-content-between">

                        <div className="nav-item me-2">
                            <Link
                                to="/"
                                className={`btn ${location.pathname === "/"
                                    ? "btn-primary"
                                    : "btn-outline-light"
                                    }`}
                            >
                                Home
                            </Link>
                        </div>

                        <div className="nav-item">
                            <Link
                                to="/add-blog"
                                className={`btn ${location.pathname === "/add-blog"
                                    ? "btn-success"
                                    : "btn-outline-success"
                                    }`}
                            >
                                + Add Blog
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
        </nav>
    );
    // 
}

export default Navbar;