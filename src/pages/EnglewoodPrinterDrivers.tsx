import { motion } from "framer-motion";
import { Printer, Download, Info, ShieldCheck } from "lucide-react";

export default function EnglewoodPrinterDrivers() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Englewood Printer Drivers
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Use this page to set up and reinstall printers for the Englewood
          location. Follow the steps for your device and printer model, or
          share this page with users who need to install their own printers.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 pb-20 items-start">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Info className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Before You Begin</h2>
            </div>
            <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
              <li>Verify you are connected to the Englewood corporate network or VPN.</li>
              <li>Make sure you have permission to install software and printers on this device.</li>
              <li>Choose the correct printer model from the list below and follow the steps.</li>
              <li>
                If you are unsure which printer to use, ask your supervisor or contact GNT Security
                before installing.
              </li>
            </ol>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <Printer className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">
                Sharp Multifunction Printers (MFPs)
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              These are the primary color multi-function copiers used for printing, copying, and
              scanning.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h3 className="font-semibold text-sm">
                  Sharp BP-50C31 – "Odyssey"
                </h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Use for general color and black-and-white office printing.</li>
                  <li>Supports duplex printing and scanning.</li>
                  <li>Preferred for most Englewood print jobs.</li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download Sharp BP Series Driver (Odyssey)
                </a>
              </div>

              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h3 className="font-semibold text-sm">
                  Sharp BP-50C26 – "Vanquish"
                </h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Secondary color MFP for Englewood users.</li>
                  <li>Use when Odyssey is busy or as a backup device.</li>
                  <li>Same driver family as the BP-50C31.</li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download Sharp BP Series Driver (Vanquish)
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              If the BP series universal driver is already installed, you may only need to add the
              printer by name or IP instead of reinstalling the driver package.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <Printer className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">
                Epson WF-4830 Office and Plant Floor Printers
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              Epson WF-4830 printers are deployed as personal office printers and on the plant floor
              for small-format jobs.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h3 className="font-semibold text-sm">
                  WF-4830 – Office Use
                </h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Standard letter and legal size printing.</li>
                  <li>Recommended when a user has a dedicated desktop printer.</li>
                  <li>Check with IT before changing ink or maintenance settings.</li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download Epson WF-4830 Driver (Office)
                </a>
              </div>

              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h3 className="font-semibold text-sm">
                  WF-4830 – Plant Floor
                </h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Used for plant floor workstations and lightweight forms.</li>
                  <li>Do not change paper type or tray setup unless directed.</li>
                  <li>Report streaks or print quality issues to IT.</li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download Epson WF-4830 Driver (Plant Floor)
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <Printer className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">
                Zebra Label Printers – ZT230 / ZT231 (300 dpi)
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              These printers are dedicated 300 dpi label printers used for production and
              operational labels. Always use the approved label formats for Englewood.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h3 className="font-semibold text-sm">Zebra ZT230 – 300 dpi</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Industrial label printer for high-volume jobs.</li>
                  <li>Configured for 300 dpi label output.</li>
                  <li>Driver should match the exact dpi setting to avoid scaling issues.</li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download Zebra ZT230 300 dpi Driver
                </a>
              </div>

              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h3 className="font-semibold text-sm">Zebra ZT231 – 300 dpi</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Newer industrial label printer platform.</li>
                  <li>Configured for Englewood label formats and 300 dpi output.</li>
                  <li>Use when assigned by operations or IT.</li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download Zebra ZT231 300 dpi Driver
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Label misalignment is almost always caused by incorrect label size, dpi setting, or
              printer calibration. Contact GNT Security before changing advanced printer settings.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <Printer className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">
                Zebra ZC300 – Badge Printer
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              The Zebra ZC300 is used for employee and visitor badges. Only authorized staff should
              have access to this printer and its badge software.
            </p>
            <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
              <h3 className="font-semibold text-sm">Zebra ZC300 – ID Badging</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Used for photo ID and access badges.</li>
                <li>Requires the approved badging application and printer driver.</li>
                <li>Do not install or move this printer without IT coordination.</li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline mt-1"
              >
                <Download className="w-4 h-4" />
                Download Zebra ZC300 Driver
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="bg-gray-50 border rounded-2xl p-6 shadow-sm space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold">Help and Support</h2>
          </div>
          <p className="text-sm text-gray-700">
            If a printer does not appear, prints with the wrong size, or is missing from this page,
            contact GNT Security so we can verify the correct driver and configuration for Englewood.
          </p>

          <div className="space-y-2 text-sm text-gray-800">
            <p>
              Phone:{" "}
              <a href="tel:+19376715597" className="text-blue-600 hover:underline">
                937.671.5597
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sales@gntsecurity.com"
                className="text-blue-600 hover:underline break-all"
              >
                sales@gntsecurity.com
              </a>
            </p>
          </div>

          <div className="border-t pt-4 space-y-3 text-xs text-gray-600">
            <p>
              Only install drivers that have been provided or approved by GNT Security. Do not
              download random drivers or utilities from third-party websites.
            </p>
            <p>
              If you are unsure which model to choose, take a picture of the printer&apos;s model
              label and include it when you open a support ticket.
            </p>
          </div>
        </motion.aside>
      </section>
    </div>
  );
}
