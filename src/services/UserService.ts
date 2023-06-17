import { IUser } from "@models/user";
import UserRepository from "@repositories/UserRepository";
import bcrypt from "bcryptjs";

class UserService {
  constructor() {}

  async getUserByUsername(username: string) {
    let user = await UserRepository.findByUsername(username);
    if (user) {
      user = user.toObject();
      delete user.password;
    }
    return user;
  }

  async createUser(user: IUser) {
    const hashedPassword = bcrypt.hashSync(user.password || "", 10);
    const newUser = { ...user, password: hashedPassword };
    let createdUser = await UserRepository.create(newUser as IUser);
    if (createdUser) {
      createdUser = createdUser.toObject();
      delete createdUser.password;
    }
    return createdUser;
  }

  async findUserById(id: string) {
    let user = await UserRepository.findById(id);
    if (user) {
      user = user.toObject();
      delete user.password;
    }
    return user;
  }

  async updateUser(id: string, data: Partial<IUser>) {
    let user = await UserRepository.update(id, data);
    if (user) {
      user = user.toObject();
      delete user.password;
    }
    return user;
  }

  async deleteUser(id: string) {
    return await UserRepository.delete(id);
  }

  async login(username: string, password: string) {
    const user = await UserRepository.findByUsername(username);
    // TODO: Validate password later
    if (user && bcrypt.compareSync(password, user.password || "")) {
      delete user.password;
      return user;
    } else {
      throw new Error("Invalid username or password");
    }
  }
}

export default new UserService();
