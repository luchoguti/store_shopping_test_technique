import {render, screen, within} from '@testing-library/react';
import Product from "../components/Product";
import product_data from "../data/products_dta.json"
describe('Test Component Product',()=>{
    beforeEach(()=>{
        let product={
            ...product_data[0]
        }
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Product product={product} detail={true}/>);
    });
    test('Validate that exist a tag h2',async ()=>{
        // eslint-disable-next-line testing-library/no-node-access
        const testHeading = document.querySelector("img");
        expect(testHeading).toBeInTheDocument();
    });

    test('We verify that the heading is rendered',async ()=>{
        expect(
            await screen.findAllByText(
                product_data[0].title,
            ),
        ).toBeDefined();
    });
    test('Validate that exist a tag img',async ()=>{
        // eslint-disable-next-line testing-library/no-node-access
        const testImage = document.querySelector("img");
        expect(testImage).toBeInTheDocument();
    });
    test('Validate a URL the some image',async ()=>{
        // eslint-disable-next-line testing-library/no-node-access
        const testImage = document.querySelector("img");
        expect(testImage.src).toContain(product_data[0].img_url);
    });
    test('Validate a ATL the some image',async ()=>{
        // eslint-disable-next-line testing-library/no-node-access
        const testImage = document.querySelector("img");
        expect(testImage.alt).toContain(product_data[0].title);
    });

    test('Validate that exist a tag p',async ()=>{
        // eslint-disable-next-line testing-library/no-node-access
        const testParagraph = document.querySelector("p:nth-child(2n+1)");
        expect(testParagraph).toBeInTheDocument();
    });
    test('Validate a price validate',async ()=>{
        expect(
            await screen.findAllByText(
                `$ ${product_data[0].price}`,
            ),
        ).toBeDefined();
    });
    test('validate if exist a detail', async ()=>{
        // eslint-disable-next-line testing-library/no-node-access
        const testParagraph = document.querySelector("p:nth-child(2n+2)");
        expect(testParagraph).toBeInTheDocument();
    });

})
