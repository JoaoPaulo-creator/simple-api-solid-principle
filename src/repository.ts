import { PrismaClient, User } from "@prisma/client";

export interface IUser {
  name: string;
  email: string;
}

export interface IUserRepository {
  createUser(user: IUser): Promise<User>;
  getUsers(): Promise<User[]>;
}

export class UserRepository implements IUserRepository {
  private prisma = new PrismaClient();

  async createUser(user: IUser): Promise<User> {
    const createUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });

    return createUser;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }
}
