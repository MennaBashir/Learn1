import { atom } from "recoil";
const ProductAtom = atom({
    key: "a1",
    default: [
        { id: 1, title: "Product1" },
        { id: 2, title: "Product2" }
    ]
})
export default ProductAtom;