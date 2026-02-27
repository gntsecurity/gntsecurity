import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    <div className="space-y-24">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Support Or Request Service
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Serving business IT needs. Reach out with issues, projects, or questions
          about managed service plans.
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
          <div className="bg-gray-50 border rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Direct Contact</h2>
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                <a href="tel:+15104690947" className="hover:underline">
                  (510) 469-0947
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Sales & General:</span>{" "}
                <a
                  href="mailto:sales@gntsecurity.com"
                  className="hover:underline break-all"
                >
                  sales@gntsecurity.com
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-700">
              If this is an urgent outage or security concern, call the number above and include a
              short description of what is down.
            </p>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-1">Service Area</p>
            <p>On-site availability is scheduled where reasonable. Remote support is available more broadly.</p>
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
          <h2 className="text-xl font-semibold mb-2">Send A Message</h2>
          <p className="text-sm text-gray-600 mb-4">
            Use this form to describe your environment, issue, or project. You will receive a reply
            from GNT Security directly.
          </p>

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
              placeholder="Support request, project, or question"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Details About Your Environment Or Issue
            </label>
            <textarea
              rows={5}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="gnt-input min-h-[140px]"
              placeholder="Number of devices, type of environment, what is going wrong, and any deadlines."
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

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full gnt-btn-brand py-3"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          <p className="text-xs text-gray-500">
            Submitting this form does not create a support contract yet. GNT Security will respond
            to gather more details and provide options.
          </p>
        </motion.form>
      </section>
    </div>
  );
}