import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/Pages/Login/Login";
import Home from "../components/Home/Home";
import AddProducts from "../components/Pages/AddProducts/AddProducts";
import BrandDetails from "../components/Pages/BrandDetails/BrandDetails";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import AddCart from "../components/Pages/AddCart/AddCart";
import UpdateProduct from "../components/Pages/UpdateProduct/UpdateProduct";
import Register from "../components/Pages/Register/Register";
import PriveteRoute from "./PrivateRouter/PrivateRouter";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/addproducts',
                element: <PriveteRoute><AddProducts></AddProducts></PriveteRoute>
            },
            {
                path: '/brand/:id',
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/details/:id',
                element: <PriveteRoute><ProductDetails></ProductDetails></PriveteRoute>,
                loader: ({ params }) => fetch(`https://server-side-sandy.vercel.app/details/${params.id}`)
            },
            {
                path: '/cart',
                element: <PriveteRoute><AddCart></AddCart></PriveteRoute>,
                loader: () => fetch('https://server-side-sandy.vercel.app/cart')
            },
            {
                path: "/update/:id",
                element: <PriveteRoute><UpdateProduct></UpdateProduct></PriveteRoute>,
                loader: ({ params }) => fetch(`https://server-side-sandy.vercel.app/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;