import { User } from "@/models";
import { IUserCreation } from "@/interfaces";
import { Op } from "sequelize";
import { Paginator } from "@/lib/Pagination";

interface PaginationResponse {
  data: User[];
  paginate: number;
  limit: number;
  totalReg: number;
}

export class UserService {
  public async getAllUsers(limit: number, offset: number): Promise<PaginationResponse> {
    const pagination = new Paginator<User>(limit, offset);
    const paginatedUsers = await pagination.getData(User, {});
    return paginatedUsers;
  }
  public async getUserById(userId: number): Promise<User | null> {
    const user = await User.findByPk(userId);
    return user;
  }
  public async getUserByEmail(userEmail: string): Promise<User | null> {
    const user = await User.findOne({ where: { email: userEmail } });
    return user;
  }
  public async searchUser(searchTerm: string): Promise<User[] | null> {
    const users = await User.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${searchTerm}%`
            }
          },
          {
            email: {
              [Op.like]: `%${searchTerm}%`
            }
          }
        ]
      }
    });
    return users.length > 0 ? users : null;
  }

  public async updateUser(userId: number, data: Partial<IUserCreation>): Promise<User | null> {
    const selectedUser = await this.getUserById(userId);
    const updatedUser = selectedUser ? selectedUser.update(data) : null
    return updatedUser;
  }
  public async deleteUser(userId: number): Promise<void | null> {
    const selectedUser = await this.getUserById(userId);
    await selectedUser?.destroy();
  }
}

export default new UserService();
