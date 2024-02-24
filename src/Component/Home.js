import { useRecoilState } from "recoil";
import ProductAtom from "../EX/ProductAtom";
function Home() {
    const [product, setProduct] = useRecoilState(ProductAtom);
    return (
        <>
            {product.map((el) => {
                return (
                    <h1 key={el.id}>{el.title}</h1>
                )
            })}


            <h1>Home</h1>

        </>
    );
}
export default Home;