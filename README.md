# Auth App Docker Setup

1. Make sure you have Node.js and npm installed. You can download them from https://nodejs.org/en

2. Ensure that Docker is installed on your system. You can download it from https://www.docker.com/products/docker-desktop/

3. Install NestJS globally on your system using the following command: `npm install -g @nestjs/cli` Additionally, install pnpm with the command: `npm install -g pnpm`

4. Navigate to the root of the `auth-app-docker` folder and run the app in Docker using the following commands in your terminal:
`docker-compose build`
`docker-compose up`

5. Once the NestJS app is running in the background, navigate to `pnpm-workspace/packages/frontend` and execute the following command in your terminal:

`pnpm install`

6. Run the front-end part of the app with the command:

`pnpm run dev`

7. Explore the app at [http://localhost:3001/](http://localhost:3001/) in your preferred web browser.

If you encounter issues while running my Docker images, try using the following commands to clean up. 
`docker system prune -af`
`docker stop $(docker ps -q)`
`docker rmi $(docker images -q)`
`docker rm $(docker ps -a -q)`

Alternatively, you can run the backend part without Docker. For this, ensure you have PostgreSQL locally installed. Make sure that the database is created and has the name configured in .env.development. Also, verify that the password and username of your database match.