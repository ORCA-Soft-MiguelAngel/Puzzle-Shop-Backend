import User, { IUser } from "@models/user";

class UserRepository {
  constructor() {}

  async create(data: IUser) {
    const newUser = new User(data);
    return await newUser.save();
  }

  async findByEmail(email: string) {
    return await User.findOne({ email });
  }

  async findById(id: string) {
    return await User.findById(id);
  }

  async update(id: string, data: Partial<IUser>) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserRepository();
