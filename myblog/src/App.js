import './App.css';
import { Fragment } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from "react-router-dom";

// components

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Portfolio from "./components/Portfolio/Portfolio";
import About from './components/About/About';
import Contact from './components/ContactPage/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Navbar/>} >
      <Route index element={<HomePage/>} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact />} />
    </Route>
   
  )
)


function App() {
  return (
   <Fragment>
    <RouterProvider router={router} />
   </Fragment>
  );
}

export default App;
