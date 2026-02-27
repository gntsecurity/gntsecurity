import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import { routes } from "./router/routes";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(37,99,235,0.14),transparent_45%),radial-gradient(900px_circle_at_80%_0%,rgba(2,132,199,0.10),transparent_40%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(248,250,252,1))]" />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <PageWrapper>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </PageWrapper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
