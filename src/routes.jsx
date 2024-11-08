import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contacts";
 import ErrorPage from "./pages/ErrorPage"; 

import Home from "./pages/Home";
import Mentorship from "./pages/Mentorship";
import ProductsServices from "./pages/ProductsServices";


const routes = [
    { path: "/", 
    element: <App /> ,
    errorElement:<ErrorPage/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/services",element:<ProductsServices/>},
            {path:"/mentorship",element:<Mentorship/>},
            {path:'/about',element:<About/>},
            {path:'/contact',element:<Contact/>}
          

        ]
}];

export { routes };