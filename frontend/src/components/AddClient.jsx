import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Save, X } from "lucide-react";
import ClientService from "../services/ClientService";

function AddClient() {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    nom: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ClientService.addClient(client)
      .then(() => {
        navigate("/clients");
      })
      .catch((error) => {
        console.error("Error adding client:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6 text-purple-400">
          <UserPlus size={28} />
          <h2 className="text-2xl font-semibold">Ajouter un Client</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              value={client.nom}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={client.age}
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
              onClick={() => navigate("/clients")}
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

export default AddClient;
