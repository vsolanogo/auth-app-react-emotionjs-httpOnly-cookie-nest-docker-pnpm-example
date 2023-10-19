import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Session } from "./session.entity";
import { User } from "../user/user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import * as crypto from "crypto";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(userId: number, ip: string): Promise<Session> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const cookieExpires = new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );

    const newToken = crypto.randomBytes(64).toString("hex");
    const session = new Session();
    session.user = user;
    session.token = newToken;
    session.ip = ip;
    session.expires = cookieExpires;
    return this.sessionRepository.save(session);
  }

  async getUserByToken(token: string): Promise<User> {
    const session = await this.sessionRepository.findOne({
      relations: ["user"],

      where: { token: token },
    });

    if (!session) {
      throw new NotFoundException("Session not found");
    }

    const user = await this.userRepository.findOne({
      where: { id: session.user.id },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }
}
