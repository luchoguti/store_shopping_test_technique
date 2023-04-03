import {ContainerGeneral} from "./styles_components/GeneralStyles";
import ListProducts from "./components/ListProducts";
import HeaderStore from "./components/HeaderStore";
import {Provider} from 'react-redux';
import store from "./redux/store";
import CanvasDetailsGeneral from "./components/CanvasDetailsGeneral";

function App() {
    return (
        <Provider store={store}>
            <HeaderStore/>
            <ContainerGeneral>
                <ListProducts/>
                <CanvasDetailsGeneral/>
            </ContainerGeneral>
        </Provider>
    );
}

export default App;
