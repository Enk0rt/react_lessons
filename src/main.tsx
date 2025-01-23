import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/const.ts";
import App from "./App.tsx";
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter basename={AppRoutes.root}>
        <App/>
    </BrowserRouter>
);
