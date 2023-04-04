import { Router } from "express";
import { UserController } from "./controllers";
import { UserRepository } from "./repository";
import { UserService } from "./service";

export const router = Router();

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

router.post("/", userController.createUser.bind(userController));
router.get("/users", userController.findAll.bind(userController));
