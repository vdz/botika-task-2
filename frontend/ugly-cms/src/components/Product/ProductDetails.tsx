import {useParams} from "react-router-dom";
import {Product} from "../../services/api-client";

export function ProductDetails() {
    const {id} = useParams()

    const products = JSON.parse(sessionStorage.getItem("products")!) as Product[]
    const product = products.find(m => m.id === id) as Product


    return (
        <div style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',
            gap: 12, flexDirection: 'column'
        }}>
            <h1>{product.name}</h1>
            <img style={{width: 400, height: 600}} src={product.preview_image}/>
            <div style={{gap: 12, display: 'flex'}}>
                <img style={{width: 200, height: 300}} src={product.images[0]}/>
                <img style={{width: 200, height: 300}} src={product.images[1]}/>
                <img style={{width: 200, height: 300}} src={product.images[2]}/>
            </div>
        </div>
    );
}
