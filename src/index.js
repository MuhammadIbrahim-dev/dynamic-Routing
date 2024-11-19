import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './data/home';
import About from './data/about';
import { Blog } from './data/Blog';
import Blogdetail from './data/data2/blogdetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouts= createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },{
      path:'/blog/:id',
      element:<Blogdetail/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allrouts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
