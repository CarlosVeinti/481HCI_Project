import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// All the Customer Pages
import LandingPage from './pages/landing_page/LandingPage';
import CategoriesPage from './pages/categories_page/CategoriesPage';
import BrowseItemsPage from './pages/browseItems_page/BrowseItemsPage';
import SingleItemPage from './pages/singleItem_page/SingleItemPage';
import EditSingleItemPage from './pages/editSingleItem_page/EditSingleItemPage';
import CartPage from './pages/cart_page/CartPage'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
