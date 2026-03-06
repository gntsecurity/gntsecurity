import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { MapPin, Phone, Mail, ShieldCheck, Building2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const pageTitle = "Contact GNT Security | Managed IT Services, Projects, and Support";
    const pageDescription =
      "Contact GNT Security for managed IT services, cybersecurity, network infrastructure, cabling, telecommunications, project work, and business technology support.";

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
      existingCanonical.setAttribute("href", "https://gntsecurity.com/contact");
    }
  }, []);

  const canSubmit = useMemo(() => {
    if (status === "sending") return false;
    if (!name.trim()) return false;
    if (!email.trim()) return false;
    if (!subject.trim()) return false;
    if (!details.trim()) return false;
    return true;
  }, [details, email, name, status, subject]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message: details, website }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please email sales@gntsecurity.com.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setDetails("");
      setWebsite("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email sales@gntsecurity.com.");
    }
  }

  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact GNT Security
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Reach out for managed IT services, cybersecurity, infrastructure work, telecommunications,
          security cameras, project support, or general business technology questions.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-20">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 border rounded-2xl p-6 space-y-5">
            <h2 className="text-xl font-semibold">Direct Contact</h2>

            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-slate-900 mt-0.5 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-900">Phone:</span>{" "}
                  <a href="tel:+15104690947" className="hover:underline">
                    (510) 469-0947
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-slate-900 mt-0.5 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-900">Sales & General:</span>{" "}
                  <a href="mailto:sales@gntsecurity.com" className="hover:underline break-all">
                    sales@gntsecurity.com
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-900 mt-0.5 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-900">Service Reach:</span> Remote support
                  is available broadly, with on-site work scheduled based on project scope,
                  availability, and location.
                </span>
              </p>
            </div>

            <p className="text-sm text-gray-700">
              If this is an urgent outage, major service disruption, or security issue, call first
              and include a short description of what is down.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="border rounded-2xl p-5 bg-white space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-slate-900" />
                <h3 className="text-sm font-semibold text-gray-900">Good Fit For This Form</h3>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Managed IT service inquiries</li>
                <li>• Network, cabling, and infrastructure projects</li>
                <li>• Security camera and telecom deployments</li>
                <li>• Cybersecurity reviews and incident support</li>
                <li>• Multi-site business technology planning</li>
              </ul>
            </div>

            <div className="border rounded-2xl p-5 bg-white space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-slate-900" />
                <h3 className="text-sm font-semibold text-gray-900">Helpful Details To Include</h3>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Number of users, locations, and devices</li>
                <li>• Whether you need ongoing support or project work</li>
                <li>• Any deadlines, outages, or security concerns</li>
                <li>• Firewalls, servers, Wi-Fi, cameras, or telecom involved</li>
                <li>• Whether service is remote, onsite, or both</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="space-y-6 gnt-card-solid p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Send A Message</h2>
            <p className="text-sm text-gray-600">
              Tell us about your environment, support need, location, or project. GNT Security will
              review the request and respond with next steps.
            </p>
          </div>

          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="gnt-input"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="gnt-input"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="gnt-input"
              placeholder="Managed IT, support issue, project, or question"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Details About Your Environment Or Request
            </label>
            <textarea
              rows={6}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="gnt-input min-h-[160px]"
              placeholder="Share your location, number of users and devices, what you need help with, whether onsite work is needed, and any deadlines."
            />
          </div>

          {status === "success" ? (
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Message received. You will get a reply soon.
            </div>
          ) : null}

          {status === "error" ? (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {errorMessage}
            </div>
          ) : null}

          <button type="submit" disabled={!canSubmit} className="w-full gnt-btn-brand py-3">
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          <p className="text-xs text-gray-500">
            Submitting this form does not create a support contract. We will review the request,
            gather any missing details, and provide next-step options.
          </p>
        </motion.form>
      </section>
    </div>
  );
}