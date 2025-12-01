import Home from "../pages/Home";
import About from "../pages/About";
import Procezly from "../pages/Procezly";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import GitHub from "../pages/GitHub";
import NotFound from "../pages/NotFound";
import SLA from "../pages/SLA";
import Onboarding from "../pages/Onboarding";
import RemoteSupport from "../pages/RemoteSupport";
import OhioITSupport from "../pages/OhioITSupport";
import IncidentResponse from "../pages/IncidentResponse";
import ManagedHomeIT from "../pages/ManagedHomeIT";
import SecurityStandards from "../pages/SecurityStandards";
import HardwareProcurement from "../pages/HardwareProcurement";
import AcceptableUse from "../pages/AcceptableUse";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/procezly", element: <Procezly /> },
  { path: "/GitHub", element: <GitHub /> },
  { path: "/sla", element: <SLA /> },
  { path: "/onboarding", element: <Onboarding /> },
  { path: "/remote-support", element: <RemoteSupport /> },
  { path: "/ohio-it-support", element: <OhioITSupport /> },
  { path: "/incident-response", element: <IncidentResponse /> },
  { path: "/home-it-support", element: <ManagedHomeIT /> },
  { path: "/security-standards", element: <SecurityStandards /> },
  { path: "/hardware-procurement", element: <HardwareProcurement /> },
  { path: "/acceptable-use", element: <AcceptableUse /> },
  { path: "*", element: <NotFound /> },
];
