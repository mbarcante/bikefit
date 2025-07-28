import { IFrameCreationAttributes } from "@/interfaces";
import { Frame } from "@/models";

export class FrameService {
  public async getAllFrames(): Promise<Frame[]> {
    const allFrames = await Frame.findAll();
    return allFrames;
  }
  public async getFrameById(frameId: number): Promise<Frame> {
    const selectedFrame = await Frame.findByPk(frameId);
    if (selectedFrame === null)
      throw new Error(`Frame com o ID ${frameId} não encontrado.`);
    return selectedFrame;
  }
  public async createFrame(data: IFrameCreationAttributes): Promise<Frame> {
    const newFrame = Frame.create(data);
    return newFrame;
  }
  public async updateFrame(
    frameId: number,
    data: Partial<IFrameCreationAttributes>
  ): Promise<Frame> {
    const selectedFrame = await this.getFrameById(frameId);
    const updatedFrame = await selectedFrame.update(data);
    return updatedFrame;
  }
  public async deleteFrame(frameId: number): Promise<void> {
    const selectedFrame = await this.getFrameById(frameId);
    await selectedFrame.destroy();
  }
}

export default new FrameService();
