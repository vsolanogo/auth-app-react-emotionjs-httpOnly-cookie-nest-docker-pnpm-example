import { Controller, Body, Post, HttpCode } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { UserService } from "../user/user.service";

@Controller("register")
export class RegisterController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() body: CreateUserDto
  ): Promise<{ id: number; email: string }> {
    const user = await this.userService.create(body);
    return { id: user.id, email: user.email };
  }
}
