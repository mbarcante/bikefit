import { Client, Bike } from "@/models";
import { IClientCreationAttributes } from "@/interfaces";
export class ClientService {
  public async getAllClients(): Promise<Client[]> {
    const clients = await Client.findAll();
    return clients;
  }

  public async getClientBikes(id: number): Promise<Bike[]> {
    const clientBikes = await Bike.findAll({ where: { clientId: id } });
    return clientBikes;
  }
  public async getClientById(clientId: number): Promise<Client> {
    const client = await Client.findByPk(clientId);
    if (client === null)
      throw new Error("Não há cliente que corresponda a esse id");
    return client;
  }
  public async getClientByEmail(clientEmail: string): Promise<Client | null> {
    const client = await Client.findOne({ where: { email: clientEmail } });
    if (client === null) {
      throw new Error("Não há cliente que corresponda a esse e-mail");
    }
    return client;
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
    if (client === null)
      throw new Error(`Cliente com ID ${clientId} não encontrado.`);
    client.destroy();
  }
}

export default new ClientService();
