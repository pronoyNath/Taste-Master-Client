import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../components/Layouts/MainLayout";
// import Login from "../components/Pages/Login/Login";
// import AddProducts from "../components/Pages/AddProducts/AddProducts";
// import BrandDetails from "../components/Pages/BrandDetails/BrandDetails";
// import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
// import AddCart from "../components/Pages/AddCart/AddCart";
// import UpdateProduct from "../components/Pages/UpdateProduct/UpdateProduct";
// import Register from "../components/Pages/Register/Register";
// import PriveteRoute from "./PrivateRouter/PrivateRouter";
// import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import AddProducts from "../components/Pages/AddProducts/AddProducts";
import BrandDetails from "../components/Pages/BrandDetails/BrandDetails";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import Cart from "../components/Pages/Cart/Cart";
import UpdateProduct from "../components/Pages/UpadteProduct/UpadteProduct";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import About from "../components/Pages/About/About";
import PriveteRoute from "./PrivateRoute/PrivateRoute";


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
                path: '/add-products',
                element: <PriveteRoute><AddProducts></AddProducts></PriveteRoute>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/brand/:id',
                element: <PriveteRoute><BrandDetails></BrandDetails></PriveteRoute>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/details/:id',
                element: <PriveteRoute><ProductDetails></ProductDetails></PriveteRoute>,
                loader: ({ params }) => fetch(`https://server-side-sandy.vercel.app/details/${params.id}`)
            },
            {
                path: '/cart',
                element: <PriveteRoute><Cart></Cart></PriveteRoute>,
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