import {DETAIL_PRODUCT, RESET_STORE_DETAIL, STORE_DETAIL, VIEW_STORE_DETAIL} from "../types";

export const setDetailProduct = (product) => async dispatch =>{
    dispatch({
        type: DETAIL_PRODUCT,
        payload: product
    })
}

export const resetDetailProduct = () => async dispatch => {
    dispatch({
        type: DETAIL_PRODUCT,
        payload: {}
    })
}

export const setStoreDetail = (product) => async dispatch =>{
    dispatch({
        type: STORE_DETAIL,
        payload: product
    })
}
export const setStateViewStoreDetail = (state) => async dispatch =>{
    dispatch({
        type: VIEW_STORE_DETAIL,
        payload: state
    })
}
export const resetStoreDetail = () => async dispatch =>{
    dispatch({
        type: RESET_STORE_DETAIL,
        payload: []
    })
}
