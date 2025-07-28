import { User } from "@/models";
import { IUserCreation } from "@/interfaces";

export class UserService {
  public async getAllUsers(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  }
  public async getUserById(userId: number): Promise<User> {
    const user = await User.findByPk(userId);
    if (user === null)
      throw new Error(`Usuário com o ID ${userId} não encontrado.`);
    return user;
  }
  public async createUser(data: IUserCreation): Promise<User> {
    const newUser = await User.create(data);
    return newUser;
  }
  public async updateUser(
    userId: number,
    data: Partial<IUserCreation>
  ): Promise<User> {
    const selectedUser = await this.getUserById(userId);
    const updatedUser = await selectedUser.update(data);
    return updatedUser;
  }
  public async deleteUser(userId: number): Promise<void> {
    const selectedUser = await this.getUserById(userId);
    await selectedUser.destroy();
  }
}

export default new UserService();
