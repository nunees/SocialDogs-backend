import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  private constructor() {
    this.repository = getRepository(User);
  }

  //function must be async/await and aways return a Promise
  async create({
    name,
    lastName,
    username,
    email,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      lastName,
      username,
      email,
      password,
      avatar,
      id,
    });
    await this.repository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne(username);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}
