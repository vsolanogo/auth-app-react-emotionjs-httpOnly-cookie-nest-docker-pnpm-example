import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, HttpStatus } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDto } from "../src/user/dto/create-user.dto";
import { LoginDto } from "../src/login/dto/login.dto";

describe("App Tests (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it("/register (POST)", async () => {
    const createUserDto: CreateUserDto = {
      email: `${uuidv4()}@example.com`,
      password: "password123",
    };

    const response = await request(app.getHttpServer())
      .post("/register")
      .send(createUserDto)
      .expect(HttpStatus.CREATED);

    expect(response.body.id).toBeDefined();
    expect(response.body.email).toBe(createUserDto.email);
  });

  it("/register (POST) - User already exists", async () => {
    const createUserDto: CreateUserDto = {
      email: `${uuidv4()}@example.com`,
      password: "password123",
    };

    const response = await request(app.getHttpServer())
      .post("/register")
      .send(createUserDto)
      .expect(HttpStatus.CREATED);

    const responseForExisting = await request(app.getHttpServer())
      .post("/register")
      .send(createUserDto)
      .expect(HttpStatus.BAD_REQUEST);

    expect(responseForExisting.body.message).toBe("User already exists.");
  });

  it("/login (POST) - Successful login", async () => {
    const createUserDto: CreateUserDto = {
      email: `${uuidv4()}@example.com`,
      password: "password123",
    };

    const responseCreateUser = await request(app.getHttpServer())
      .post("/register")
      .send(createUserDto)
      .expect(HttpStatus.CREATED);

    const loginDto: LoginDto = {
      email: createUserDto.email,
      password: createUserDto.password,
    };

    const response = await request(app.getHttpServer())
      .post("/login")
      .send(loginDto)
      .expect(HttpStatus.OK);

    expect(response.header["set-cookie"]).toBeDefined();
  });

  it("/login (POST) - Invalid credentials", async () => {
    const loginDto: LoginDto = {
      email: "nonexistent@example.com",
      password: "invalidpassword",
    };

    const response = await request(app.getHttpServer())
      .post("/login")
      .send(loginDto)
      .expect(HttpStatus.UNAUTHORIZED);

    expect(response.body.message).toBe("Invalid credentials");
  });
});
