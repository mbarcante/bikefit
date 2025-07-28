import { BikeFit } from "@/models";
import { IBikeFitCreationAttributes } from "@/interfaces";

export class BikeFitService {
  public async getAllBikeFits(): Promise<BikeFit[]> {
    const allBikeFits = await BikeFit.findAll();
    return allBikeFits;
  }
  public async getBikeFitById(bikeFitId: number): Promise<BikeFit> {
    const bikeFit = await BikeFit.findByPk(bikeFitId);
    if (bikeFit === null) {
      throw new Error(`BikeFit com ID ${bikeFitId} não encontrado.`);
    }
    return bikeFit;
  }
  public async createBikeFit(
    data: IBikeFitCreationAttributes
  ): Promise<BikeFit> {
    const newBikeFit = BikeFit.create(data);
    return newBikeFit;
  }
  public async updateBikeFit(
    bikeFitId: number,
    data: Partial<IBikeFitCreationAttributes>
  ): Promise<BikeFit> {
    const getBikeFit = await this.getBikeFitById(bikeFitId);
    const updatedBikeFit = await getBikeFit.update(data);
    return updatedBikeFit;
  }
  public async deleteBikeFit(bikeFitId: number): Promise<void> {
    const getBikeFit = await this.getBikeFitById(bikeFitId);
    await getBikeFit.destroy();
  }
}

export default new BikeFitService();
