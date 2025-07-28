export interface IRim {
  id: number;
  userId?: number;
  size: string;
}

export type IRimCreationAttributes = Omit<IRim, "id">;
