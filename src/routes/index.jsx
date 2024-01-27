import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import EachPage from "../Pages/EachPage/EachPage";
import EachItem from "../Pages/EachPage/EachItem";



const router = createBrowserRouter([{

    path: "/test/",
    element: <EachItem />
}, {
    path: "",
    element: <EachPage />
}])


export default router 