import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,Route,RouterProvider,createRoutesFromElements} from "react-router-dom";
import Layout from './Layout' 
import Home from './components/Home/Home' 
import About from './components/About/about'
import Contact from './components/Contact/Contact'
import Github, { gitHubInfoLoader } from './components/Github/Github'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route 
      loader={gitHubInfoLoader}
      path="Github" 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} /> 
    </Route>
  ));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
