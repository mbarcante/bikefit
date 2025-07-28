export interface IClient {
  id: number;
  userId?: number;
  email: string;
  name: string;
  sex: string;
  birthDate: string;
  profession?: string;
  cellphone: string;
  observations?: string;

  createdAt: string;
  updatedAt: string;
}

export type IClientCreationPayload = Omit<
  IClient,
  "id" | "createdAt" | "updatedAt"
>;

export interface ClientService {
  addClient: (clientData: IClientCreationPayload) => Promise<any>;
  updateClient: (
    id: number,
    clientData: IClientCreationPayload
  ) => Promise<any>;
}
