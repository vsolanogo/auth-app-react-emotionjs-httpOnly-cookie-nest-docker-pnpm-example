import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Ip,
  Response,
} from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginDto } from "./dto/login.dto";
import { SESSION_ID } from "../constants/constants";

@Controller("login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async auth(@Body() body: LoginDto, @Ip() ip, @Response() res): Promise<void> {
    try {
      const newSession = await this.loginService.auth(body, ip);

      res.cookie(SESSION_ID, newSession.token, {
        expires: newSession.expires,
        sameSite: "strict",
        httpOnly: true,
      });

      return res.status(HttpStatus.OK).send();
    } catch (error) {
      throw error;
    }
  }

  @Post("logout")
  async logout(@Response() res): Promise<void> {
    try {
      res.clearCookie(SESSION_ID);

      return res.status(HttpStatus.OK).send();
    } catch (error) {
      throw error;
    }
  }
}
