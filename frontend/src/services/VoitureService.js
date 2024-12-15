/*class VoitureService {
  getAllVoitures() {
    const mockVoitures = [
      {
        id: 1,
        marque: "Toyota",
        model: "Corolla",
        matricule: "123ABC",
        idclient: 1,
      },
      {
        id: 2,
        marque: "Honda",
        model: "Civic",
        matricule: "456DEF",
        idclient: 1,
      },
      { id: 3, marque: "BMW", model: "X5", matricule: "789GHI", idclient: 2 },
      {
        id: 4,
        marque: "Mercedes",
        model: "C200",
        matricule: "012JKL",
        idclient: 3,
      },
    ];
    return Promise.resolve({ data: mockVoitures });
  }

  getVoituresByClient(clientId) {
    const mockVoitures = [
      { id: 1, marque: "Toyota", model: "Corolla", matricule: "123ABC" },
      { id: 2, marque: "Honda", model: "Civic", matricule: "456DEF" },
    ];
    return Promise.resolve({ data: mockVoitures });
  }

  addVoiture(clientId, voiture) {
    return Promise.resolve({
      data: { ...voiture, id: Math.random(), idclient: clientId },
    });
  }
}*/

import axios from "axios";

const API_URL = "http://localhost:8888/SERVICE-VOITURE";

class VoitureService {
  getAllVoitures() {
    return axios.get(`${API_URL}/voitures`);
  }

  getVoituresByClient(clientId) {
    return axios.get(`${API_URL}/voitures/client/${clientId}`);
  }

  addVoiture(clientId, voiture) {
    return axios.post(`${API_URL}/voitures/${clientId}`, voiture);
  }
}

export default new VoitureService();
