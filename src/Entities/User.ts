import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @Column()
  lastName: string;
  @Column()
  name: string;
  @Column()
  ava: string;
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  status: string;
  @Column()
  login: string;
  @Column()
  password: string;
}
