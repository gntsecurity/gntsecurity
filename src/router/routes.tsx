import HardwareProcurement from "../pages/HardwareProcurement";

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
  { path: "*", element: <NotFound /> },
];
