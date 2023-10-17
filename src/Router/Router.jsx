import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/Pages/Login/Login";
import Home from "../components/Home/Home";
import AddProducts from "../components/Pages/AddProducts/AddProducts";
import BrandDetails from "../components/Pages/BrandDetails/BrandDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/brands.json')
            },
            {
                path:'/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/brand/:id',
                element: <BrandDetails></BrandDetails>,
                loader:()=>fetch('/brands.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;