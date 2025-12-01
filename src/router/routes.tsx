import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Procezly from "../pages/Procezly";
import GitHub from "../pages/GitHub";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Services", element: <Services /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Procezly", element: <Procezly /> },
  { path: "/GitHub", element: <GitHub /> }
]);

export default router;
