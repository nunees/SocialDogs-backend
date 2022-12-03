import { CreateDateColumn, Entity, PrimaryColumn, Column } from "typeorm";
import {v4 as uuidv4} from "uuid";

@Entity("users")
export class User{
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4();
    }
  }
}
