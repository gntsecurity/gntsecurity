import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Shield, Network, Phone, MapPin, ArrowRight } from "lucide-react";

interface Props {
  city: string;
  state: string;
}

const stateNames: Record<string, string> = {
  CA: "California",
  OH: "Ohio",
  MI: "Michigan",
  FL: "Florida",
};

export default function ManagedItLocation({ city, state }: Props) {
  const stateName = stateNames[state] ?? state;
  const pageTitle = `Managed IT Services in ${city}, ${state} | GNT Security`;
  const pageDescription = `GNT Security provides managed IT services, cybersecurity, network infrastructure, telecommunications, cabling, and business technology support for organizations in ${city}, ${stateName}.`;

  useEffect(() => {
    document.title = pageTitle;

    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute("content", pageDescription);
    }

    const existingOgTitle = document.querySelector('meta[property="og:title"]');
    if (existingOgTitle) {
      existingOgTitle.setAttribute("content", pageTitle);
    }

    const existingOgDescription = document.querySelector('meta[property="og:description"]');
    if (existingOgDescription) {
      existingOgDescription.setAttribute("content", pageDescription);
    }

    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute(
        "href",
        `https://gntsecurity.com/managed-it/${city.toLowerCase().replace(/\s+/g, "-")}-${state.toLowerCase()}`
      );
    }
  }, [city, state, pageTitle, pageDescription]);

  return (
    <div className="space-y-16 pt-16 pb-20">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
            <MapPin className="h-4 w-4 text-slate-900" />
            Managed IT Services in {city}, {state}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Managed IT Services for Businesses in {city}, {state}
          </h1>

          <p className="max-w-3xl text-lg text-slate-700">
            GNT Security delivers managed IT services, cybersecurity, telecommunications,
            infrastructure support, structured cabling, security camera systems, and project-based
            technology work for organizations in {city}, {stateName}.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Contact Our Team
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
          <Building2 className="h-6 w-6 text-slate-900" />
          <h2 className="text-xl font-semibold text-slate-900">Managed IT Support</h2>
          <p className="text-sm text-slate-700">
            End-user support, workstation management, patching, onboarding, monitoring, asset
            visibility, and day-to-day IT administration for business environments in {city}.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
          <Shield className="h-6 w-6 text-slate-900" />
          <h2 className="text-xl font-semibold text-slate-900">Cybersecurity Services</h2>
          <p className="text-sm text-slate-700">
            Endpoint protection, MFA enforcement, firewall reviews, hardening standards, email
            security controls, and incident response support for organizations in {city}, {state}.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
          <Network className="h-6 w-6 text-slate-900" />
          <h2 className="text-xl font-semibold text-slate-900">Infrastructure and Cabling</h2>
          <p className="text-sm text-slate-700">
            Network design, Wi-Fi deployments, switching, structured cabling, firewall setups,
            connectivity improvements, and business infrastructure projects.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
          <Phone className="h-6 w-6 text-slate-900" />
          <h2 className="text-xl font-semibold text-slate-900">Telecommunications and Field Work</h2>
          <p className="text-sm text-slate-700">
            VoIP deployments, telecom systems, camera installs, office technology rollouts, and
            project-based technical support for companies that need dependable execution.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border bg-slate-50 p-8 sm:p-10 space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why Businesses in {city}, {state} Need a Strong MSP Partner
          </h2>

          <div className="space-y-4 text-slate-700">
            <p>
              Businesses need reliable systems, secure remote access, monitored devices, stable
              backups, and fast response when something breaks. A managed service provider helps
              reduce downtime, improve security, and keep business operations moving.
            </p>
            <p>
              GNT Security supports organizations that need practical IT operations, not vague
              promises. That includes helpdesk support, cybersecurity improvement, network
              management, infrastructure upgrades, standards documentation, and project execution.
            </p>
            <p>
              Whether your organization needs recurring managed IT support or help with a specific
              technology project in {city}, {stateName}, our team can step in with structured
              technical support and clear next steps.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Request Information
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}