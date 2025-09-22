import { Client, Bike, PostureEvaluation } from "@/models";
import { IClientCreationAttributes } from "@/interfaces";
import { Paginator } from "@/lib/Pagination";
import { Op } from "sequelize";

interface PaginationResponse {
  data: Client[];
  paginate: number;
  limit: number;
  totalReg: number;
}

export class ClientService {
  public async getAllClients(limit: number, offset: number): Promise<PaginationResponse> {
    const paginate = new Paginator<Client>(limit, offset);
    const paginatedClients = await paginate.getData(Client, {});
    return paginatedClients;
  }

  public async getClientBikes(id: number): Promise<Bike[]> {
    const clientBikes = await Bike.findAll({ where: { clientId: id } });
    return clientBikes;
  }
  public async getClientPostureEvaluations(id: number): Promise<PostureEvaluation[]> {
    const clientPostures = await PostureEvaluation.findAll({ where: { clientId: id } })
    return clientPostures;
  }
  public async getClientById(clientId: number): Promise<Client | null> {
    const client = await Client.findByPk(clientId);

    return client;
  }
  public async getClientByEmail(clientEmail: string): Promise<Client | null> {
    const client = await Client.findOne({ where: { email: clientEmail } });
    return client;
  }
  public async searchClient(searchTerm: string): Promise<Client[] | null> {
    const clients = await Client.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${searchTerm}%`
            }
          },
          {
            email: {
              [Op.like]: `%${searchTerm}%`
            }
          }
        ]
      }
    });
    return clients.length > 0 ? clients : null;
  }
  public async createClient(data: IClientCreationAttributes): Promise<Client> {
    const newClient = await Client.create(data);
    return newClient;
  }
  public async updateClient(
    clientId: number,
    data: Partial<IClientCreationAttributes>
  ): Promise<Client> {
    const client = await this.getClientById(clientId);
    if (client === null) {
      throw new Error("Não há cliente que corresponda a esse id");
    }
    const updatedClient = await client.update(data);
    return updatedClient;
  }

  public async deleteClient(clientId: number): Promise<void> {
    const client = await this.getClientById(clientId);
    if (client === null) {
      throw new Error(`Cliente com ID ${clientId} não encontrado.`);
    }
    client.destroy();
  }
}

export default new ClientService();
