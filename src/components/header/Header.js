import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="header-main bg-primary">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-homepage">
                <div className="container">
                    <h2 className="bg-light p-2 mt-1 rounded-pill">CORPORATE CLASSIFIEDS</h2>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link to="/" class="nav-link">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" class="nav-link">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" class="nav-link">Login</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Header;

