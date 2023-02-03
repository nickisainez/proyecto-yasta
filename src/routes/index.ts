import { Express, Router } from "express";

import main from "./main";
import person from "./person";
import payment from "./payment";

export async function useRouter(app: Express, api_url: string) {
  //version 1

  const router = Router();

  //test
  router.use("/main", main);
  //person
  router.use("/person", person);
  //payment
  router.use("/payment", payment);

  //attendadce
  //attendadce routes
  app.use(api_url, router);
}
