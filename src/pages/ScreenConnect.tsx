import { useEffect } from "react";

export default function ScreenConnect() {
  useEffect(() => {
    window.location.replace("https://gntsecurity.screenconnect.com/");
  }, []);

  return (
    <div className="py-24 text-center">
      <p className="text-lg">Redirecting to ScreenConnect...</p>
    </div>
  );
}
