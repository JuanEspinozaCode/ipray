import { createBrowserRouter } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import AboutPage from "../Pages/AboutPage";
import App from "../page";
import RealHome from "../Components/RealHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path: "home", element: <HomePage />},
            {path: "about", element: <AboutPage />},
            {path: "real", element: <RealHome />},
        ]
    }
]);
export default router;