import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { SESSION_ID } from "../constants/constants";
import { InjectRepository } from "@nestjs/typeorm";
import { Session } from "../session/session.entity";
import { Repository } from "typeorm";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const cookies = request.cookies;

    const sessionCookie = cookies[SESSION_ID];

    const session = await this.sessionRepository.findOne({
      where: { token: sessionCookie },
    });

    if (!session) {
      return false;
    }

    if (session.expires <= new Date()) {
      return false;
    }

    if (sessionCookie === session?.token) {
      return true; // Grant access
    }

    return false; // Deny access
  }
}
