import './App.css'

import {CarsProvider} from "./context/Context.tsx";
import {MainLayout} from "./components/layouts/MainLayout.tsx";

function App () {
    return (
        <div>
            <CarsProvider>
                <MainLayout/>
            </CarsProvider>
        </div>
    );
}

export default App;