import { IClient, IClientCreationPayload } from "../interfaces";

const url = "http://localhost:3001";

// const getToken = () => {
//   const tokens = sessionStorage.getItem("session");
//   if (!tokens) throw new Error("No session");
//   const accessToken = JSON.parse(tokens).accessToken;
//   return accessToken;
// };

export class ClientService {
  getAllClients = (): Promise<IClient[]> => {
    const headers = {
      "Content-type": "application/json",
      // Authorization: `Bearer ${acessToken}`,
    };
    return fetch(`${url}/api/clients`, {
      method: "GET",
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
  getClientById = (id: number): Promise<IClient> => {
    const headers = {
      "Content-type": "application/json",
      // Authorization: `Bearer ${acessToken}`
    };
    return fetch(`${url}/api/client/${id}`, {
      method: "GET",
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
    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${acessToken}`,
    };
    return fetch(`${url}/api/clients/bikes/${clientId}`, {
      method: "GET",
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

  addClient = (body: IClientCreationPayload) => {
    const headers = {
      "Content-type": "application/json",
      // Authorization: `Bearer ${acessToken}`,
    };
    return fetch(`${url}/api/clients/`, {
      method: "POST",
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
    const headers = {
      "Content-type": "application/json",
      // Authorization: `Bearer ${acessToken}`,
    };
    return fetch(`${url}/api/clients/${id}`, {
      method: "PATCH",
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

  deleteClient = () => {};
}

export default new ClientService();
