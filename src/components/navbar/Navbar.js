import { Link } from "react-router-dom";
import "./navbarStyle.css"

const Navbar = () => {
    return (
        <div className="header-main">
                  <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-homepage">
                <div className="container ">
                    <h2 className="bg-light p-1 mt-1 rounded-pill">CORPORATE CLASSIFIEDS</h2>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/dashboard" class="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dash-contact" class="nav-link">Contact Us</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login" class="nav-link">Logout</Link>
                    </li>

                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

