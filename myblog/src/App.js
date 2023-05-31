import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

// components
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Portfolio from "./components/Portfolio/Portfolio";
import About from './components/About/About';
import Contact from './components/ContactPage/Contact';

const App = () => {
  return (
    <BrowserRouter basename="/holeeyblog">
      <Fragment>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;





/*import './App.css';
import { Fragment } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// components
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Portfolio from "./components/Portfolio/Portfolio";
import About from './components/About/About';
import Contact from './components/ContactPage/Contact';

const router = createBrowserRouter( {},
  createRoutesFromElements(
    <Routes path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
);

function App() {
  return (
    <Fragment>
      < RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
*/