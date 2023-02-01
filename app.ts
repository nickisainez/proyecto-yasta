import cors from "cors";
import routes from "./src/delivery";
import express from "express";
import { config } from "dotenv";
import error from "./src/midlewares/error";
import logger from "./src/midlewares/logger";

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

//app.use(secureApi);

app.use(api_url, routes);

app.use(error);

app.listen(port, () => {
  console.log("server running", port);
});
