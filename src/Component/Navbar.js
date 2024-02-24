import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Logo</Link>
                    <div>
                        <ul className="navbar-nav flex-row me-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-5">
                                <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;