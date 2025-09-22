import { IClient, IClientCreationPayload } from '@/types/client';
import { IPostureEvaluation } from '@/types/postureEvaluation';
import { API_BASE_URL, getStandardHeaders } from './utils';

export class ClientService {
  static async getAllClients(): Promise<IClient[]> {
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
      console.error('Erro ao buscar clientes: ', error);
      throw error;
    }
  }

  static async getClientById(id: number): Promise<IClient> {
    const headers = getStandardHeaders();
    const response = await fetch(`${API_BASE_URL}/api/clients/${id}`, {
      method: 'GET',
      headers,
    });
    
    if (!response.ok) {
      throw new Error('Cliente não encontrado');
    }
    
    const res = await response.json();
    if (res.error) {
      throw new Error(res.message);
    }
    return res;
  }

  static async getClientBikes(clientId: number) {
    const headers = getStandardHeaders();
    const response = await fetch(`${API_BASE_URL}/api/clients/bikes/${clientId}`, {
      method: 'GET',
      headers,
    });
    
    if (!response.ok) {
      throw new Error('Erro ao buscar bicicletas');
    }
    
    const res = await response.json();
    if (res.error) {
      throw new Error(res.message);
    }
    return res;
  }

  static async getClientPostureEvaluations(clientId: number): Promise<IPostureEvaluation[]> {
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

  static async addClient(body: IClientCreationPayload): Promise<IClient> {
    const headers = getStandardHeaders();
    const response = await fetch(`${API_BASE_URL}/api/clients/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error('Erro ao criar cliente');
    }
    
    const res = await response.json();
    if (res.error) {
      throw new Error(res.message);
    }
    return res;
  }

  static async patchClient(id: number, body: Partial<IClient>): Promise<IClient> {
    const headers = getStandardHeaders();
    const response = await fetch(`${API_BASE_URL}/api/clients/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error('Erro ao atualizar cliente');
    }
    
    const res = await response.json();
    if (res.error) {
      throw new Error(res.message);
    }
    return res;
  }

  static async deleteClient(id: number): Promise<void> {
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
    } catch (error: any) {
      console.error('Erro ao excluir cliente: ', error);
      throw error;
    }
  }
}