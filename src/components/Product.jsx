import React from "react";
import {useDispatch} from "react-redux";
import {setDetailProduct} from "../redux/actions/storeAction";
import NumberFormat from 'react-number-format';


const Product = ({product, detail}) => {
    const dispatch = useDispatch();

    const saveDetailProduct = () => {
        dispatch(setDetailProduct(product));
    }
    return (
        <>
            <div>
                <span>10</span>
                {
                    detail && (
                        <span>
                            <img alt="icon_close" src="icon_close.png"/>
                        </span>
                    )
                }
            </div>
            <div>
                <img src={product.img_url} alt={product.title} onClick={() => {
                    saveDetailProduct()
                }}/>
            </div>
            <div>
                <img alt="icon_plus" src="icon_plus.png"/>
                <img alt="icon_minus" src="icon_minus.png"/>
            </div>
            <h2>{product.title}</h2>
            <p>
                <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                $ {product.price}
            </p>
            {
                detail && (
                    <p>
                        {product.description}
                    </p>
                )
            }
            <a>
                <img src="icon_store_one.png"/>
                <span>BUY</span>
            </a>
        </>
    )
}
export default Product;
