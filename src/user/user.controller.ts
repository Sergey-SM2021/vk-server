import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { IUser } from "../types/User";
import { UserService } from "./user.service";
import { UserDTO } from "./user.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get("")
  async getAll() {
    return await this.userService.getUsers();
  }

  @Get("/:id")
  async getOne(@Param("id") id) {
    return await this.userService.getUserById(id);
  }

  @Post("")
  async createUser(@Body() body: UserDTO) {
    return this.userService.createUser(body);
  }
}