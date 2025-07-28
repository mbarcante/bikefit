export interface IBikeType {
  id: number;
  userId?: number;
  description: string;
}

export type IBikeTypeCreationAttributes = Omit<IBikeType, "id">;
