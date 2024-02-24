import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function View() {
    const { ProductID } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        fetch(`http://localhost:3100/Products/${ProductID}`).then((res) => res.json())
            .then((d) => setItem(d));
    }, []);
    return (
        <>
            {item && <h2>{item.title}</h2>}

        </>
    );
}
export default View;