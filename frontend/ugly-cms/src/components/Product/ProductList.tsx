import {useEffect, useState} from "react";
import {API_URL} from "../../api.ts";
import {listProducts, Product} from "../../services/api-client";

export function ProductList() {
    const [products, setProducts] = useState<Product[]>();
    useEffect(() => {
        (async () => {
            const products = await listProducts({
                baseURL: API_URL
            });

            setProducts(products.data);
            sessionStorage.setItem('products', JSON.stringify(products.data));
        })();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 12,
            }}
        >
            {products?.map((product) => (
                <a href={`/products/${product.id}`}>
                    <div key={product.id} style={{width: 300}}>
                        <img
                            src={product.preview_image}
                            alt={product.name}
                            style={{width: "100%", height: 400}}
                        />
                        <div>{product.name}</div>
                    </div>
                </a>
            ))}
            <a href="products/create">Create New</a>
        </div>
    );
}
