
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
            <ul className="list-unstyled mt-4">
                <li className="mb-3" ><Link to={'products'}>Get all Products</Link> </li>
                <li><Link to={'category'} >Get all Categories</Link> </li>
            </ul>
        </>
    );
}
export default Sidebar;