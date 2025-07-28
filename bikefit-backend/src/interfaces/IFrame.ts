export interface IFrame {
  id: number;
  userId?: number;
  type: string;
}

export type IFrameCreationAttributes = Omit<IFrame, "id">;
