import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { Session } from "../session/session.entity";
import { UserController } from "./user.controller";
import { SessionService } from "../session/session.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Session])],
  providers: [UserService, SessionService],
  controllers: [UserController],
})
export class UserModule {}
