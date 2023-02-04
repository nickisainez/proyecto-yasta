import { Express, Router } from "express";

import main from "./main";
import person from "./person";
import cycle from "./cycle";
import payment from "./payment";
import usercycle from "./userCycle";
import attendance from "./attendance";

export async function useRouter(app: Express, api_url: string) {
  //version 1

  const router = Router();

  //test
  router.use("/main", main);
  //person
  router.use("/person", person);

  //cycle
  //cycle routes
  router.use("/cycle", cycle);
  //person
  //person routes
  //payment
  router.use("/payment", payment);
  //attendadce
  router.use("/attendance", attendance);

  //usercycle
  router.use("/usercycle", usercycle);

  //attendadce
  //attendadce routes
  app.use(api_url, router);
}
