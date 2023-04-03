import {useSelector} from "react-redux";
import ProductDetail from "./ProductDetail";
import {CanvasDetailsGeneralStyle} from "../styles_components/CanvasDetailsGeneralStyle";
import StoreListProduct from "./StoreListProduct";

const CanvasDetailsGeneral = () => {
    const {
        storeActions
    } = useSelector(
        state => ({
            storeActions: state.storeActions
        })
    );
    return (
        <CanvasDetailsGeneralStyle>
            {
                Object.keys(storeActions.detail_product).length !== 0 && (
                    <ProductDetail/>
                )
            }
            {
                Object.keys(storeActions.detail_product).length === 0 && storeActions.view_store_detail && (
                    <StoreListProduct/>
                )
            }
        </CanvasDetailsGeneralStyle>
    )
}
export default CanvasDetailsGeneral;
