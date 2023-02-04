import cors from "cors";
import { useRouter } from "./src/routes";
import express from "express";
import { config } from "dotenv";
import { connect as connectMongoDBService } from "./src/connection/mongoconnection";
import { syncErrorMiddleware } from "./src/midlewares/error";
import logger from "./src/midlewares/logger";
import prisma from "./src/connection/prisma";

config();

const app = express();

const port = parseInt(<string>process.env.PORT);
const cli_origin: string = <string>process.env.CLIURL;
const api_url: string = <string>process.env.API;

app.use(cors({ origin: cli_origin }));

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use(logger);

connectMongoDBService();

//app.use(secureApi);

try {
  useRouter(app, api_url);
} catch (error) {
  console.log(error);
} finally {
  prisma.instance.$disconnect();
}

app.use(syncErrorMiddleware);

app.listen(port, () => {
  console.log("server running", port);
});
