import { useState, useEffect } from "react";
import { Users, Car, Loader } from "lucide-react";
import ClientService from "../services/ClientService";
import VoitureService from "../services/VoitureService";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientVoitures, setClientVoitures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = () => {
    ClientService.getAllClients()
      .then((response) => {
        setClients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Erreur lors du chargement des clients");
        setLoading(false);
      });
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    VoitureService.getVoituresByClient(client.id)
      .then((response) => {
        setClientVoitures(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des voitures:", error);
        setClientVoitures([]);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader className="h-8 w-8 animate-spin text-purple-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-4 bg-red-900 border border-red-700 text-red-100 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Liste des clients */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4 text-purple-400">
          <Users size={24} />
          <h2 className="text-xl font-semibold">Liste des Clients</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <button
              key={client.id}
              onClick={() => handleClientClick(client)}
              className={`p-4 rounded-lg text-left transition-colors ${
                selectedClient?.id === client.id
                  ? "bg-gray-700 border-l-4 border-purple-500"
                  : "bg-gray-900 hover:bg-gray-700"
              }`}
            >
              <div className="font-medium text-gray-200">{client.nom}</div>
              <div className="text-sm text-gray-400">Age: {client.age} ans</div>
            </button>
          ))}
        </div>
      </div>

      {/* Détails des voitures */}
      {selectedClient ? (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4 text-purple-400">
            <Car size={24} />
            <h3 className="text-xl font-semibold">
              Voitures de {selectedClient.nom}
            </h3>
          </div>
          {clientVoitures.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Marque
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Modèle
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Matricule
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {clientVoitures.map((voiture) => (
                    <tr key={voiture.id} className="hover:bg-gray-700">
                      <td className="px-4 py-3 text-gray-300">
                        {voiture.marque}
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        {voiture.model}
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        {voiture.matricule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-400 py-4">
              Aucune voiture trouvée pour ce client
            </p>
          )}
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg border-2 border-dashed border-gray-700 p-6 flex items-center justify-center">
          <p className="text-gray-400">
            Sélectionnez un client pour voir ses voitures
          </p>
        </div>
      )}
    </div>
  );
}

export default ClientList;
