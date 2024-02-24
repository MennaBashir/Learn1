import { Link } from "react-router-dom";
import View from "./View";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
function Products() {
    const [product, setProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:3100/Products").then((res) => res.json()).then((data) => setProduct(data));
    }
    useEffect(() => {
        getProduct();
    }, []);
    const deleteProduct = (Product) => {
        Swal.fire({
            title: `Are You Sure To Delete ${Product.title}?`,
            showCancelButton: true
        }).then((dt) => {
            if (dt.isConfirmed) {
                fetch(`http://localhost:3100/Products/${Product.id}`, {
                    method: "DELETE"
                }).then((res) => res.json()).then(() => getProduct());

            }
        });
    }
    return (
        <>
            <h1 className="text-center mt-4 mb-4">Products page</h1>
            <Link to={'add'} className="btn btn-success mb-4"> Add New Product</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td className="pt-3">{el.id}</td>
                                <td className="pt-3">{el.title}</td>
                                <td className="pt-3">{el.price}</td>
                                <td>
                                    <button className="btn btn-danger me-2" onClick={() => deleteProduct(el)}>Delete</button>
                                    <Link to={`${el.id}`} className="btn btn-info me-2"> View</Link>
                                    <Link to={`edit`}  className="btn btn-primary me-2">Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}
export default Products;