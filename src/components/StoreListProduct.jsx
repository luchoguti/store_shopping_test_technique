import {StoreListProductGeneralStyle, StoreListProductStyle} from "../styles_components/StoreListProductStyle";
import {useDispatch, useSelector} from "react-redux";
import {NumericFormat} from "react-number-format";
import React, {useEffect, useState} from "react";
import {setStateViewStoreDetail} from "../redux/actions/storeAction";
import SummaryModal from "./SummaryModal";
import {ContainerBtnSummary} from "../styles_components/GeneralStyles";
import randomCode from 'crypto-random-string';

const StoreListProduct = () => {
    const dispatch = useDispatch();

    const {
        storeActions
    } = useSelector(
        state => ({
            storeActions: state.storeActions
        })
    );
    const referenceCode = randomCode({ length: 6 });
    const [totalStore, setTotalStore] = useState(0);
    const [openStateModal, setOpenStateModal] = useState(false);
    const wompi_data = {
        publicKey: "pub_test_RAsLYBkZu7mxCWopo2dYfYYWGnVLODhh",
        currency: 'COP',
        value: totalStore * 100,
        reference: "37DNKF84S92N1S",
        redirectUrl: "http://localhost:3000/",
    };
    const { publicKey, currency, value, reference, redirectUrl } = wompi_data;
    const newRedirectUrl = redirectUrl.replace(/:/g, '%3A').replace(/\//g, '%2F');
    const url = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${currency}&amount-in-cents=${value}&reference=${reference}&redirect-url=${newRedirectUrl}`;

    useEffect(() => {
        if (Object.keys(storeActions.store_detail).length !== 0) {
            setTotalStore(storeActions.store_detail.map(item => item.cant * item.price).reduce((prev, next) => prev + next));
        }
    }, [storeActions]);
    const closeStoreDetail = () => {
        dispatch(setStateViewStoreDetail(false));
    }
    const openModal = async () => {
        //setOpenStateModal(!openStateModal);
        const delivery = [];
        const formData = {
            ref: reference,
            cart: delivery,
        };
        formData.paymentMethod = 'WOMPI';
        await window.open(url, '_self');

    }
    return (
        <>
            {
                Object.keys(storeActions.store_detail).length !== 0 && (
                    <StoreListProductGeneralStyle>
                        <div>
                            <img alt="icon_close" src="icon_close.png" onClick={() => {
                                closeStoreDetail()
                            }}/>
                        </div>
                        {
                            storeActions.store_detail.map((store_product, key) => {
                                return (
                                    <StoreListProductStyle key={key}>
                                        <div>
                                            {
                                                store_product.cant
                                            }
                                        </div>
                                        <div>
                                            <img src={store_product.img_url} alt={store_product.title}/>
                                        </div>
                                    </StoreListProductStyle>
                                )
                            })
                        }
                        <div className="total_section">
                            <span>Total:</span>
                            <span>
                                <NumericFormat
                                    value={totalStore}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                            </span>
                        </div>
                        <div className="btn-pay" onClick={()=>{openModal()}}>
                            <div>
                                <span>
                                    <img src="icon_security.png"/>
                                </span>
                                <span>
                                    Pay with <b>Wompi</b>
                                </span>
                            </div>
                        </div>
                        <ContainerBtnSummary>
                            <SummaryModal
                                open={openStateModal}
                                setOpenStateModal={setOpenStateModal}
                            />
                        </ContainerBtnSummary>
                    </StoreListProductGeneralStyle>
                )
            }
        </>
    )
}

export default StoreListProduct;
