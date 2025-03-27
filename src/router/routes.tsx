import Home from "../pages/Home";
import About from "../pages/About";
import Procezly from "../pages/Procezly";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/procezly", element: <Procezly /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
];
