import Product from "./Product";
import {ProductListStyled, ProductStyled} from "../styles_components/ProductStyles";
import products_dta from "../data/products_dta.json";

const ListProducts = () => {
    return (
        <ProductListStyled className="list_product">
            {
                products_dta.map((product, key) => {
                    return (
                        <ProductStyled key={key}>
                            <Product product={product} detail={false} />
                        </ProductStyled>
                    )
                })
            }
        </ProductListStyled>
    )
}
export default ListProducts;
