export interface IBike {
  id: number;
  clientId: number;
  userId?: number;
  type: string;
  size: string;
  brand: string;
  model: string;
  year?: number;
  rim: string;
  frame: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IBikeCreationAttributes = Omit<
  IBike,
  "id" | "createdAt" | "updatedAt"
>;
