import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/Pages/Login/Login";
import Home from "../components/Home/Home";


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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;