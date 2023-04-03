import {DETAIL_PRODUCT, RESET_STORE_DETAIL, STORE_DETAIL, VIEW_STORE_DETAIL} from "../types";

const initialState = {
    detail_product:{},
    store_detail:[],
    view_store_detail: false
}
export default  (state = initialState,action)=>{
    switch (action.type){
        case DETAIL_PRODUCT:{
            return {
                ...state,
                detail_product: action.payload
            }
        }
        case STORE_DETAIL:{
            const newItem = action.payload;
            const hasItem = state.store_detail.some(item => item.code === newItem.code);
            if (hasItem) {
                if(newItem.cant === 0){
                    return {
                        ...state,
                        store_detail: state.store_detail.filter(item => item.code !== newItem.code)
                    }
                }else {
                    return {
                        ...state,
                        store_detail: state.store_detail.map(item =>
                            item.code === newItem.code ? newItem : item
                        )
                    }
                }
            } else {
                return {
                    ...state,
                    store_detail: [...state.store_detail, newItem]
                }
            }
        }
        case VIEW_STORE_DETAIL:{
            return {
                ...state,
                view_store_detail: action.payload
            }
        }
        case RESET_STORE_DETAIL:{
            return {
                ...state,
                store_detail: action.payload
            }
        }
        default: return state;
    }
}
