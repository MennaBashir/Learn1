import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct() {
    const [title1, setTitle] = useState('');
    const [price1, setPrice] = useState(0);
    let navigat = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3100/Products/", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                title: title1,
                price: price1
            })
        }).then((res) => res.json());
        navigat('/products');
    }
    return (
        <>
            <h1 className="text-center mb-4 mt-4">Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Product Title" aria-describedby="Product Title"
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleInputNumber" placeholder="Product Price" aria-describedby="Product Price"
                        onChange={(e) => setPrice(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>

            </form>
        </>
    );
}
export default AddProduct;