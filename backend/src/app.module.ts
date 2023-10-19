import { Module } from "@nestjs/common";
import { SessionModule } from "./session/session.module";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Session } from "./session/session.entity";
import { User } from "./user/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          database: config.get<string>("DB_NAME"),
          type: "postgres",
          host: config.get<string>("DB_HOST"),
          port: config.get<number>("DB_PORT"),
          username: config.get<string>("DB_USERNAME"),
          password: config.get<string>("DB_PASSWORD"),
          entities: [User, Session],
          synchronize: true,
        };
      },
    }),
    SessionModule,
    UserModule,
    LoginModule,
    RegisterModule,
  ],
})
export class AppModule {}
