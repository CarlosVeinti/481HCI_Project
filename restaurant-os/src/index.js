import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
// All the Customer Pages
import LandingPage from './pages/landing_page/LandingPage';
import CategoriesPage from './pages/categories_page/CategoriesPage';
import BrowseItemsPage from './pages/browseItems_page/BrowseItemsPage';
import SingleItemPage from './pages/singleItem_page/SingleItemPage';
import EditSingleItemPage from './pages/editSingleItem_page/EditSingleItemPage';
import CartPage from './pages/cart_page/CartPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/categories",
    element: <CategoriesPage/>,
  },
  {
    path: "/",
    element: <LandingPage />,

  },
  {
    path: "/browse-items",
    element: <BrowseItemsPage />,

  },
  {
    path: "/edit-single-items",
    element: <EditSingleItemPage />,

  },
  {
    path: "/cart",
    element: <CartPage />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
/* Took this out as I want to render Individual pages atm.
<RouterProvider router={router} />
*/
root.render(
  <React.StrictMode>
    <BrowseItemsPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
