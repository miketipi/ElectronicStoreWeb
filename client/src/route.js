import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error/Error";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart.js'
import Home from './components/Home/Home.js'
import Checkout from "./components/Checkout/Checkout.js";
import ProductsList from "./components/admin/ProductsList";
import Details from "./components/Details/Details";
import Account from "./components/Account/Account";
import UpdateProduct from "./components/admin/UpdateProduct";
import UpdateProductt from "./components/UpdateProduct/UpdateProductt";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <UpdateProductt/>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registry',
                element: <Register />
            },
            {
                path: '/cart',
                element: <Cart />,
                children: [
                    
                ]
            },
            {
                path: '/cart/checkout',
                element: <Checkout />
            },
            {
                path: '/admin/product',
                element: <ProductsList />
            },
            {
                path: '/:id/',
                element: <Details/>
                // element: (props) => <Details {...props}/>
                // render: (props) =>
                //     <Details {...props} />
            },
            {
                path: '/logout',
                element: <Account />
            },
            {
                path: '/admin/product/modify',
                element: <UpdateProduct/>
            }

        ]
    }
]);

export default router;