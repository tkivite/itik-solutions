import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { routes } from './routes';
import { HelmetProvider } from 'react-helmet-async';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes)
root.render(
    <HelmetProvider>
 <RouterProvider router={router}/>
 </HelmetProvider>
);


