import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import QuiSommesNous from "./pages/QuiSommesNous.jsx";
import Missions from "./pages/Missions.jsx";
import Evenements from "./pages/Evenements.jsx";
import EvenementDetail from "./pages/EvenementDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/quisommesnous" element={<QuiSommesNous />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/evenements" element={<Evenements />} />
              <Route path="/template-event/:id" element={<EvenementDetail />} />
              <Route path="/evenement/:id" element={<EvenementDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
