import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

function EditData() {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3100/Products/`).then((res) => res.json())
            .then((d) => setProducts(d));
    }, []);


    const [titleY, setTitle] = useState('');
    const [priceY, setPrice] = useState(0);
    // let navigat = useNavigate();
    // const
    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     fetch("http://localhost:3100/Products/", {
    //         "method": "PUT",
    //         "headers": {
    //             "Content-Type": "application/json",
    //         },
    //         "body": JSON.stringify({
    //             title: titleY,
    //             price: priceY
    //         })
    //     }).then((res) => res.json());
    //     navigat('/products');
    // }
    return (
        <>

            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input value={`${product && product.title}`} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder="Product Title" aria-describedby="Product Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Price</label>
                    <input value={`${product && product.price}`} onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="exampleInputNumber" placeholder="Product Price" aria-describedby="Product Price" />
                </div>

                <button type="submit" className="btn btn-primary">Edit Product</button>

            </form>


        </>
    );
}
export default EditData;