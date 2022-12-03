import {ICreateUserDTO} from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
// Contract
export interface IUserRepository{
  create(data: ICreateUserDTO): Promise<void>;
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
}

