import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import LandingPage from './pages/landing_page/LandingPage';
import CategoriesPage from './pages/categories_page/CategoriesPage';
import BrowseItemsPage from './pages/browseItems_page/BrowseItemsPage';
import EditSingleItemPage from './pages/editSingleItem_page/EditSingleItemPage';
import CartPage from './pages/cart_page/CartPage';
import WaiterPage from './pages/waiter_page/WaiterPage';
import TablePage from './pages/Table_page/TablePage';
import HistoryPage from './pages/history_page/HistoryPage';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import store from './store/store'; 
import { Provider } from 'react-redux';
import { MyProvider } from './provider';


const router = createHashRouter([
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/browse-items/:category',
    element: <BrowseItemsPage />,
  },
  {
    path: '/edit-single-item/:itemName',
    element: <EditSingleItemPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/waiter',
    element: <WaiterPage />,
  },
  {
    path: '/table',
    element: <TablePage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <MyProvider>
    <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
  </MyProvider>
  </Provider>
  
);
