import { Rim } from "@/models";
import { IRimCreationAttributes } from "@/interfaces";

export class RimService {
  public async getAllRims(): Promise<Rim[]> {
    const allRims = await Rim.findAll();
    return allRims;
  }
  public async getRimById(rimId: number): Promise<Rim> {
    const selectedRim = await Rim.findByPk(rimId);
    if (selectedRim === null) {
      throw new Error(`Aro com o ID ${rimId} não encontrado.`);
    }
    return selectedRim;
  }
  public async createRim(data: IRimCreationAttributes): Promise<Rim> {
    const newRim = Rim.create(data);
    return newRim;
  }
  public async updateRim(
    rimId: number,
    data: Partial<IRimCreationAttributes>
  ): Promise<Rim> {
    const selectedRim = await this.getRimById(rimId);
    const updatedRim = await selectedRim.update(data);
    return updatedRim;
  }
  public async deleteRim(rimId: number): Promise<void> {
    const selectedRim = await this.getRimById(rimId);
    await selectedRim.destroy();
  }
}

export default new RimService();
