import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import InstallPrompt from "./components/InstallPrompt";
import { routes } from "./router/routes";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <InstallPrompt />
      <PageWrapper>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default App;
