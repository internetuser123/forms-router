import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from 'react';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import Result from './components/Result';

/* const dataContext = useContext() */

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormOne />,
  },
  {
    path: "/formTwo",
    element: <FormTwo />,
  },
  {
    path: "/result",
    element: <Result />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
