import { IClient, IClientCreationPayload, IPostureEvaluation } from '../types';
import { API_BASE_URL, getStandardHeaders } from './utils';

export class ClientService {
  getAllClients = async (): Promise<IClient[]> => {
    try {
      const headers = getStandardHeaders();
      const response = await fetch(`${API_BASE_URL}/api/clients`, {
        method: "GET",
        headers
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();

      if (res.error) {
        throw new Error(res.message)
      }
      return res
    } catch (error: any) {
      console.error('Erro ao buscar avaliações posturais do cliente: ', error);
      throw error;
    }
  }
  getClientById = (id: number): Promise<IClient> => {
    const headers = getStandardHeaders();
    return fetch(`${API_BASE_URL}/api/clients/${id}`, {
      method: 'GET',
      headers,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.message);
        }
        return res;
      });
  };

  getClientBikes = (clientId: number) => {
    const headers = getStandardHeaders();
    return fetch(`${API_BASE_URL}/api/clients/bikes/${clientId}`, {
      method: 'GET',
      headers,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.message);
        }
        return res;
      });
  };

  getClientPostureEvaluations = async (clientId: number): Promise<IPostureEvaluation[]> => {
    try {
      const headers = getStandardHeaders();
      const response = await fetch(`${API_BASE_URL}/api/clients/postureEvaluations/${clientId}`, {
        method: "GET",
        headers
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`)
      }
      const res = await response.json();
      if (res.error) {
        throw new Error(res.message);
      }
      return res
    } catch (error: any) {
      console.error('Erro ao buscar avaliações posturais do cliente: ', error);
      throw error;
    }
  }

  addClient = (body: IClientCreationPayload) => {
    const headers = getStandardHeaders();
    return fetch(`${API_BASE_URL}/api/clients/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.message);
        }
        return res;
      });
  };

  patchClient = (id: number, body: Partial<IClient>): Promise<IClient> => {
    const headers = getStandardHeaders();
    return fetch(`${API_BASE_URL}/api/clients/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.message);
        }
        return res;
      });
  };

  deleteClient = async (id: number): Promise<object> => {
    try {
      const headers = getStandardHeaders();
      const response = await fetch(`${API_BASE_URL}/api/clients/${id}`, {
        method: "DELETE",
        headers
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`)
      };
      const res = await response.json()
      if (res.error) {
        throw new Error(res.message);
      }
      return res
    } catch (error: any) {
      console.error('Erro ao buscar clientes: ', error);
      throw error;
    }

  };
}

export default new ClientService();
