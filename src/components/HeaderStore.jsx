import {HeaderStoreContainerPrincipal} from "../styles_components/HeaderStoreStyle";
import {useDispatch, useSelector} from "react-redux";
import {NumericFormat} from "react-number-format";
import React, {useEffect, useState} from "react";
import {resetStoreDetail, setStateViewStoreDetail} from "../redux/actions/storeAction";

const HeaderStore = () => {
    const dispatch = useDispatch();
    const {
        storeActions
    } = useSelector(
        state => ({
            storeActions: state.storeActions
        })
    );
    const [totalStore,setTotalStore] = useState();
    useEffect(()=>{
        if(Object.keys(storeActions.store_detail).length !== 0) {
            setTotalStore(storeActions.store_detail.map(item => item.cant * item.price).reduce((prev, next) => prev + next));
        }else{
            setTotalStore(0);
        }
    },[storeActions]);
    const viewStore = () => {
        if(!storeActions.view_store_detail) {
            dispatch(setStateViewStoreDetail(true));
        }
    }
    const deleteStore = () => {
        if (window.confirm("Are you sure to empty your shopping cart ?") == true) {
            dispatch(resetStoreDetail());
            dispatch(setStateViewStoreDetail(false));
        }
    }
    return (
        <HeaderStoreContainerPrincipal>
            <section>
                <img src="shopping_card.png" onClick={viewStore}/>
                <p>Store</p>
            </section>
            <section>
                {
                    Object.keys(storeActions.detail_product).length !== 0 && (
                        <p>Product</p>
                    )
                }
                {
                    storeActions.view_store_detail && Object.keys(storeActions.detail_product).length === 0 && (
                        <p>Shopping Card</p>
                    )
                }
                {
                    Object.keys(storeActions.detail_product).length === 0 && !storeActions.view_store_detail  && (
                        <p></p>
                    )
                }
                <div>
                    <img src="icon_store_one.png"/>
                    <span>
                        <NumericFormat
                            value={totalStore}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
                    </span>
                    <img src="icon_close_quadrate.png" className="delete_store" onClick={()=>{deleteStore()}}/>
                </div>
            </section>
        </HeaderStoreContainerPrincipal>
    )
}
export default HeaderStore;
