import { Bike } from "@/models";
import { IBikeCreationAttributes } from "@/interfaces";

export class BikeService {
  public async getAllBikes(): Promise<Bike[]> {
    const allBikes = Bike.findAll();
    return allBikes;
  }
  public async getBikeById(bikeId: number): Promise<Bike> {
    const bike = await Bike.findByPk(bikeId);
    if (bike === null) {
      throw new Error(`Bike com o id ${bikeId} não foi encontrado`);
    }
    return bike;
  }
  public async createBike(data: IBikeCreationAttributes): Promise<Bike> {
    const newBike = Bike.create(data);
    return newBike;
  }
  public async updateBike(
    bikeId: number,
    data: IBikeCreationAttributes
  ): Promise<Bike> {
    const selectedBike = await this.getBikeById(bikeId);
    const updatedBike = await selectedBike.update(data);
    return updatedBike;
  }
  public async deleteBike(bikeId: number): Promise<void> {
    const selectedBike = await this.getBikeById(bikeId);
    await selectedBike.destroy();
  }
}

export default new BikeService();
