import { Express, Router } from "express";

import payment from "./payment";

const api_url: string = <string>process.env.API;

export async function useRouter(app: Express) {
  //version 1

  const router = Router();

  router.use("/payment", payment);

  //cycle
  //cycle routes

  //person
  //person routes

  //attendadce
  //attendadce routes

  app.use(api_url, router);
}
