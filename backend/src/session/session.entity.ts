import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from "typeorm";
import { User } from "../user/user.entity";

@Entity()
@Unique(["token"])
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (i) => i.session, { nullable: false })
  user: User;

  @Column({ nullable: false, length: 128 })
  token: string;

  @Column({ nullable: false, length: 45 })
  ip: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  expires: Date;
}
