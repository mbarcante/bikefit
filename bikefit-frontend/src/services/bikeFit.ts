import { API_BASE_URL, getStandardHeaders } from './utils';
import { IBikeFit, IBikeFitCreationPayload } from '../types';

export class BikeFitService {
  getBikefitByBike = async (id: number) => {
    try {
      const headers = getStandardHeaders();
      const response = await fetch(`${API_BASE_URL}/api/bikeFits/bike/${id}`, {
        method: 'GET',
        headers,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();

      if (res.error) {
        throw new Error(res.message);
      }
      return res;
    } catch (error: any) {
      console.error('Erro ao buscar bikeFit por bike: ', error);
      throw error;
    }
  };
  addBikeFit = async (body: IBikeFitCreationPayload) => {
    try {
      const headers = getStandardHeaders();
      const response = await fetch(`${API_BASE_URL}/api/bikeFits`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      if (res.error) {
        throw new Error(res.message);
      }
      return res;
    } catch (error: any) {
      console.error('Erro ao criar BikeFit: ', error);
      throw error;
    }
  };
  patchBikeFit = async (id: number, body: IBikeFitCreationPayload) => {
    try {
      const headers = getStandardHeaders();
      const response = await fetch(`${API_BASE_URL}/api/bikeFits/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      if (res.error) {
        throw new Error(res.message);
      }
      return res;
    } catch (error: any) {
      console.error('Erro ao criar BikeFit: ', error);
      throw error;
    }
  };
}

export default new BikeFitService();
