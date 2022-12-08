import { Injectable } from "@nestjs/common";
import { User } from "../Entities/User";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "./user.dto";

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }
  async getUserById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async getUsers() {
    return await this.userRepository.find();
  }

  async createUser({ lastName, name, status, ava, password, login }: UserDTO) {
    const user = new User();
    user.lastName = lastName;
    user.name = name;
    user.ava = ava;
    user.status = status;
    user.password = password;
    user.login = login;
    await this.userRepository.save(user);
  }
}