import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientList from "./components/ClientList";
import VoitureList from "./components/VoitureList";
import AddClient from "./components/AddClient";
import AddVoiture from "./components/AddVoiture";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<ClientList />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/voitures" element={<VoitureList />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/add-voiture" element={<AddVoiture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
