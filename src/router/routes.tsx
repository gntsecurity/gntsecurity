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
import IncidentResponse from "../pages/IncidentResponse";
import SecurityStandards from "../pages/SecurityStandards";
import HardwareProcurement from "../pages/HardwareProcurement";
import AcceptableUse from "../pages/AcceptableUse";
import BusinessContinuityDR from "../pages/BusinessContinuityDR";
import NetworkDeploymentStandards from "../pages/NetworkDeploymentStandards";
import EmailSecurityExpectations from "../pages/EmailSecurityExpectations";
import CustomerResourceLibrary from "../pages/CustomerResourceLibrary";
import Testimonials from "../pages/Testimonials";
import Careers from "../pages/Careers";
import EnglewoodPrinterDrivers from "../pages/EnglewoodPrinterDrivers";
import Customers from "../pages/Customers";
import AACT from "../pages/customers/AACT";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Staff from "../pages/Staff";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/procezly", element: <Procezly /> },
  { path: "/github", element: <GitHub /> },
  { path: "/sla", element: <SLA /> },
  { path: "/onboarding", element: <Onboarding /> },
  { path: "/remote-support", element: <RemoteSupport /> },
  { path: "/incident-response", element: <IncidentResponse /> },
  { path: "/security-standards", element: <SecurityStandards /> },
  { path: "/hardware-procurement", element: <HardwareProcurement /> },
  { path: "/acceptable-use", element: <AcceptableUse /> },
  { path: "/business-continuity-disaster-recovery", element: <BusinessContinuityDR /> },
  { path: "/network-deployment-standards", element: <NetworkDeploymentStandards /> },
  { path: "/email-security-expectations", element: <EmailSecurityExpectations /> },
  { path: "/customer-resource-library", element: <CustomerResourceLibrary /> },
  { path: "/englewood-printer-drivers", element: <EnglewoodPrinterDrivers /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/careers", element: <Careers /> },
  { path: "/customers", element: <Customers /> },
  { path: "/customers/aact", element: <AACT /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/staff", element: <Staff /> },
  { path: "*", element: <NotFound /> },
];