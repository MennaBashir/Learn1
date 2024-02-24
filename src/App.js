import './App.css';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";
import Products from "./Component/Products";
import Category from "./Component/Category";
import View from "./Component/View";
import EditData from "./Component/EditData";
import AddProduct from "./Component/AddProduct";
import { Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":ProductID" element={<View />} />
              <Route path="edit" element={<EditData />} />
            </Route>
            <Route path="category" element={<Category />} />
          </Routes>


        </div>
      </div>
    </>
  );
}

export default App;