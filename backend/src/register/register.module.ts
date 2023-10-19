import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegisterController } from "./register.controller";
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RegisterController],
  providers: [UserService],
})
export class RegisterModule {}
