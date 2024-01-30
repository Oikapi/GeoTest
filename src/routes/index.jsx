import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import EachPage from "../Pages/EachPage/EachPage";
import EachItem from "../Pages/EachPage/EachItem";
import DirectoryPage from "../Pages/DirectoryPage/DirectoryPage";
import CardsPage from "../Pages/CardsPage/CardsPage";



const router = createBrowserRouter([{

    path: "/test/",
    element: <EachItem />
}, {
    path: "",
    element: <EachPage />
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