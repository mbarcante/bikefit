import { ArticularAngles } from "@/models";
import { IArticularAnglesCreationAttributes } from "@/interfaces";

export class ArticularAnglesService {
  public async getAllArticularAngles(): Promise<ArticularAngles[]> {
    const allArticularAngles = await ArticularAngles.findAll();
    return allArticularAngles;
  }
  public async getArticularAnglesById(
    articularAngleId: number
  ): Promise<ArticularAngles> {
    const articularAngles = await ArticularAngles.findByPk(articularAngleId);
    if (articularAngles === null)
      throw new Error(
        `Angulo Articular com ID ${articularAngleId} não encontrado.`
      );
    return articularAngles;
  }
  public async createArticularAngles(
    data: IArticularAnglesCreationAttributes
  ): Promise<ArticularAngles> {
    const newArticularAngles = await ArticularAngles.create(data);
    return newArticularAngles;
  }
  public async updateArticularAngles(
    articularAnglesId: number,
    data: Partial<IArticularAnglesCreationAttributes>
  ): Promise<ArticularAngles> {
    const selectedArticularAngles = await this.getArticularAnglesById(
      articularAnglesId
    );
    if (selectedArticularAngles === null) {
      throw new Error("Não há cliente que corresponda a esse id");
    }
    const updatedArticularAngles = await selectedArticularAngles.update(data);
    return updatedArticularAngles;
  }
  public async deleteArticularAngles(articularAnglesId: number): Promise<void> {
    const selectedArticularAngles = await this.getArticularAnglesById(
      articularAnglesId
    );
    if (selectedArticularAngles === null)
      throw new Error(
        "Angulo Articular com ID ${articularAngleId} não encontrado."
      );
    await selectedArticularAngles.destroy();
  }
}

export default new ArticularAnglesService();
