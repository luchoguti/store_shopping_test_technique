import {render, screen, within} from '@testing-library/react';
import ListProducts from "../components/ListProducts";

describe('Test Component List Products',()=>{
    test('Validate that exist div',async ()=>{
        const { container } = render(<ListProducts/>);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toHaveClass('list_product')
    });

})
