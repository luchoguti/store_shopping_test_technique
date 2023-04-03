import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    resetDetailProduct,
    setDetailProduct,
    setStateViewStoreDetail,
    setStoreDetail
} from "../redux/actions/storeAction";
import { NumericFormat } from 'react-number-format';

const Product = ({product, detail}) => {
    const dispatch = useDispatch();
    const {
        storeActions
    } = useSelector(
        state => ({
            storeActions: state.storeActions
        })
    );
    const lookDetailProduct = () => {
        if(!storeActions.view_store_detail){
            dispatch(setDetailProduct(product));
        }
        let position = window.pageYOffset;
        function animateScroll() {
            position -= 50;
            if (position < 0) {
                window.scrollTo(0, 0);
                return;
            }
            window.scrollTo(0, position);
            requestAnimationFrame(animateScroll);
        }
        animateScroll();
    }
    const closeDetailProduct = () => {
        dispatch(resetDetailProduct());
        dispatch(setStateViewStoreDetail(false));
    }
    const plusAndMinusProductStore = (num) => {
        let store_list_product = storeActions.store_detail;
        let valid_store_prod = validateStoreProduct();
        if(valid_store_prod === -1){
            product.cant = 1;
        }else{
            product.cant = store_list_product[valid_store_prod].cant + num;
        }
        if(valid_store_prod !== -1 || num !== -1) {
            dispatch(setStoreDetail(product));
        }
    }
    const validateStoreProduct = () => {
        let store_list_product = storeActions.store_detail;
        return store_list_product.findIndex((list_data)=>{ return list_data.code === product.code });
    }
    return (
        <>
            <div className={validateStoreProduct() !== -1 ?"":"empty_div"}>
                {
                    validateStoreProduct() !== -1 &&(
                        <span>
                            {
                                storeActions.store_detail[validateStoreProduct()].cant
                            }
                        </span>
                    )
                }
                <span></span>
                {
                    detail && (
                        <span className="close_detail">
                            <img alt="icon_close" src="icon_close.png" onClick={()=>{closeDetailProduct()}}/>
                        </span>
                    )
                }
            </div>
            <div>
                <img src={product.img_url} alt={product.title} onClick={() => {
                    lookDetailProduct()
                }}/>
            </div>
            <div>
                <img alt="icon_plus" src="icon_plus.png" onClick={()=>{plusAndMinusProductStore(1)}} />
                <img alt="icon_minus" src="icon_minus.png" onClick={()=>{plusAndMinusProductStore(-1)}}/>
            </div>
            <h2>{product.title}</h2>
            <p>
                <NumericFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </p>
            {
                detail && (
                    <p>
                        {product.description}
                    </p>
                )
            }
        </>
    )
}
export default Product;
