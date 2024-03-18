import { createBrowserRouter } from "react-router-dom";
import DirectoryPage from "../Pages/DirectoryPage/DirectoryPage";
import CardsPage from "../Pages/CardsPage/CardsPage";
import MainPage from "../Pages/MainPage/MainPage";
import TestPage from "../Pages/TestPage/TestPage";



const router = createBrowserRouter([{

    path: "/test/",
    element: <TestPage />
}, {
    path: "",
    element: <MainPage />
},
{
    path: "/directory",
    element: <DirectoryPage />
},
{
    path: "/cards",
    element: <CardsPage />
}
], { basename: '/GeoTest/' })

export default router 