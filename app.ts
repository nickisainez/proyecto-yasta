import cors from "cors";
import { useRouter } from "./src/routes";
import express from "express";
import { config } from "dotenv";
import error from "./src/midlewares/error";
import logger from "./src/midlewares/logger";
import prisma from "./src/connection/prisma";

config();

const app = express();

const port = parseInt(<string>process.env.PORT);
const cli_origin: string = <string>process.env.CLIURL;

app.use(cors({ origin: cli_origin }));

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use(logger);

//app.use(secureApi);

useRouter(app)
  .catch((e) => console.error(e))
  .finally(async () => await prisma.instance.$disconnect());

app.use(error);

app.listen(port, () => {
  console.log("server running", port);
});
