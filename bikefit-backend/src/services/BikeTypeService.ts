import { BikeType } from "@/models";
import { IBikeTypeCreationAttributes } from "@/interfaces/IBikeType";

export class BikeTypeService {
  public async getAllBikeTypes(): Promise<BikeType[]> {
    const allBikeTypes = await BikeType.findAll();
    return allBikeTypes;
  }
  public async getBikeTypeById(id: number): Promise<BikeType> {
    const selectedBikeType = await BikeType.findByPk(id);
    if (selectedBikeType === null) throw new Error(``);
    return selectedBikeType;
  }
  public async createBikeType(
    data: IBikeTypeCreationAttributes
  ): Promise<BikeType> {
    const newBikeType = await BikeType.create(data);
    return newBikeType;
  }
  public async updateBikeType(
    id: number,
    data: Partial<IBikeTypeCreationAttributes>
  ): Promise<BikeType> {
    const selectedBikeType = await this.getBikeTypeById(id);
    const updatedBikeType = await selectedBikeType.update(data);
    return updatedBikeType;
  }
  public async deleteBikeType(id: number): Promise<void> {
    const selectedBikeType = await this.getBikeTypeById(id);
    await selectedBikeType.destroy();
  }
}

export default new BikeTypeService();
