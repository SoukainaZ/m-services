import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarFront, Save, X } from "lucide-react";
import VoitureService from "../services/VoitureService";

function AddVoiture() {
  const navigate = useNavigate();
  const [voiture, setVoiture] = useState({
    marque: "",
    model: "",
    matricule: "",
  });
  const [clientId, setClientId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    VoitureService.addVoiture(clientId, voiture)
      .then(() => {
        navigate("/voitures");
      })
      .catch((error) => {
        console.error("Error adding voiture:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoiture((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6 text-purple-400">
          <CarFront size={28} />
          <h2 className="text-2xl font-semibold">Ajouter une Voiture</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              ID Client
            </label>
            <input
              type="number"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Marque
            </label>
            <input
              type="text"
              name="marque"
              value={voiture.marque}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Modèle
            </label>
            <input
              type="text"
              name="model"
              value={voiture.model}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Matricule
            </label>
            <input
              type="text"
              name="matricule"
              value={voiture.matricule}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={20} />
              Enregistrer
            </button>
            <button
              type="button"
              onClick={() => navigate("/voitures")}
              className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <X size={20} />
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVoiture;
