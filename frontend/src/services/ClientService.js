/*class ClientService {
  getAllClients() {
    // Données de test
    const mockClients = [
      { id: 1, nom: "John Doe", age: 30 },
      { id: 2, nom: "Jane Smith", age: 25 },
      { id: 3, nom: "Robert Johnson", age: 45 },
      { id: 4, nom: "Sarah Wilson", age: 35 },
    ];
    return Promise.resolve({ data: mockClients });
  }

  getClientById(id) {
    const client = { id: id, nom: "John Doe", age: 30 };
    return Promise.resolve({ data: client });
  }

  addClient(client) {
    return Promise.resolve({ data: { ...client, id: Math.random() } });
  }
}*/

import axios from "axios";

const API_URL = "http://localhost:8888/SERVICE-CLIENT";

class ClientService {
  getAllClients() {
    return axios.get(`${API_URL}/clients`);
  }

  getClientById(id) {
    return axios.get(`${API_URL}/clients/${id}`);
  }

  addClient(client) {
    return axios.post(`${API_URL}/clients`, client);
  }
}

export default new ClientService();
