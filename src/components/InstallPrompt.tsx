import { useEffect, useState } from "react";

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isInStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    const isiOS = isIOS();
    const standalone = isInStandaloneMode();

    setIsIOSDevice(isiOS);

    if (isiOS && !standalone) {
      setShowPrompt(true);
    }

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === "accepted") {
        setShowPrompt(false);
      }
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 p-4 rounded-xl bg-white border shadow-xl z-50 flex justify-between items-center">
      <div className="text-sm font-medium text-gray-800">
        {isIOSDevice ? "Tap Share > Add to Home Screen" : "Add GNT Security to your home screen"}
      </div>
      {!isIOSDevice && (
        <button
          onClick={handleInstall}
          className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add
        </button>
      )}
    </div>
  );
}
