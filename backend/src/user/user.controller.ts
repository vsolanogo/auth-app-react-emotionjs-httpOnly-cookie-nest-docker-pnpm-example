import { Controller, Req, Get, UseGuards } from "@nestjs/common";
import { SESSION_ID } from "../constants/constants";
import { SessionService } from "../session/session.service";
import { LoginGuard } from "../login/login.guard";

@Controller("user")
@UseGuards(LoginGuard)
export class UserController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  async getEmail(@Req() request): Promise<{ email: string }> {
    const cookieValue = request.cookies[SESSION_ID];

    const user = await this.sessionService.getUserByToken(cookieValue);

    return { email: user.email };
  }
}
