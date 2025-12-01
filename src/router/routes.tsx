import Home from "../pages/Home";
import About from "../pages/About";
import Procezly from "../pages/Procezly";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import GitHub from "../pages/GitHub";
import NotFound from "../pages/NotFound";
import SLA from "../pages/SLA";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/procezly", element: <Procezly /> },
  { path: "/GitHub", element: <GitHub /> },
  { path: "/sla", element: <SLA /> },
  { path: "*", element: <NotFound /> },
];
