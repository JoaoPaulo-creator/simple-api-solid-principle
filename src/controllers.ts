import { Request, Response } from "express";
import { IUserService } from "./service";

export class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    return await this.userService
      .createUser({ name, email })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((error) => {
        const { message } = error;
        res.status(400).json({ message });
      });
  }

  async findAll(req: Request, res: Response) {
    return await this.userService
      .getUsers()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        const { message } = error;
        return res.status(200).json({ message });
      });
  }
}
