export interface IClient {
  id: number;
  userId?: number;
  email: string;
  name: string;
  sex: string;
  birthDate: Date;
  profession?: string;
  cellphone: string;
  observations?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
export type IClientCreationAttributes = Omit<
  IClient,
  "id" | "createdAt" | "updatedAt"
>;
