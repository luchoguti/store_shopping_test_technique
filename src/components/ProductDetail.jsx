import {useSelector} from "react-redux";
import {ProductDetailStyled} from "../styles_components/ProductDetailStyle";
import Product from "./Product";

const ProductDetail = () => {
    const {
        storeActions
    } = useSelector(
        state => ({
            storeActions: state.storeActions
        })
    );
  return (
      <>
          {
              Object.keys(storeActions.detail_product).length !== 0 && (
                  <ProductDetailStyled>
                      <Product product={storeActions.detail_product} detail={true}/>
                  </ProductDetailStyled>
              )
          }
      </>
  )
}
export default ProductDetail;
