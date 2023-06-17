import { IUser } from "@models/user";
import UserRepository from "@repositories/UserRepository";

class UserService {
  constructor() {}

  async createUser(data: IUser) {
    return await UserRepository.create(data);
  }

  async findUserById(id: string) {
    return await UserRepository.findById(id);
  }

  async updateUser(id: string, data: Partial<IUser>) {
    return await UserRepository.update(id, data);
  }

  async deleteUser(id: string) {
    return await UserRepository.delete(id);
  }
}

export default new UserService();
