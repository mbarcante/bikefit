import { IPostureEvaluation, IPostureEvaluationCreation } from "@/interfaces";
import { PostureEvaluation } from "@/models";

export class PostureEvaluationService {
  public async getAllPostureEvaluations(): Promise<PostureEvaluation[]> {
    const postureEvaluations = await PostureEvaluation.findAll();
    return postureEvaluations;
  }
  public async getPostureEvaluationById(
    id: number
  ): Promise<PostureEvaluation> {
    const postureEvaluation = await PostureEvaluation.findByPk(id);
    if (postureEvaluation === null) {
      throw new Error("Não há Avaliação Postural que corresponda a esse id");
    }
    return postureEvaluation;
  }
  public async createPostureEvaluation(
    data: IPostureEvaluationCreation
  ): Promise<IPostureEvaluation> {
    const newPostureEvaluation = await PostureEvaluation.create(data);
    return newPostureEvaluation;
  }
  public async updatePostureEvaluation(
    postureEvaluationId: number,
    data: Partial<IPostureEvaluationCreation>
  ): Promise<PostureEvaluation> {
    const postureEvaluation = await this.getPostureEvaluationById(
      postureEvaluationId
    );
    const updatedPostureEvaluation = await postureEvaluation.update(data);
    return updatedPostureEvaluation;
  }
  public async deletePostureEvaluation(id: number): Promise<void> {
    const selectedPostureEvaluation = await this.getPostureEvaluationById(id);
    await selectedPostureEvaluation.destroy();
  }
}

export default new PostureEvaluationService();
