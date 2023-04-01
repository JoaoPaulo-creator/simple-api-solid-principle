import { User } from "@prisma/client";
import { IUser, IUserRepository } from "./repository";

export interface IUserService {
  createUser(user: IUser): Promise<User>;
  getUsers(): Promise<User[]>;
}

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.getUsers();
    console.log(users.length);
    if (users.length == 0) {
      throw Error("User list is empty");
    }

    return users;
  }

  async createUser(user: IUser): Promise<User> {
    if (!user.name) {
      throw new Error("Name is required");
    }

    if (!user.email) {
      throw new Error("Email is required");
    }
    const createUser = await this.userRepository.createUser(user);
    console.log(`Created user: ${JSON.stringify(user)}`);
    return createUser;
  }
}
