import { Express, Router } from "express";

import main from "./main";
import person from "./person";
import cycle from "./cycle";
import payment from "./payment";
import login from "./login";
import usercycle from "./userCycle";
import attendance from "./attendance";
import verifyToken from "../midlewares/verifyToken";

export async function useRouter(app: Express, api_url: string) {
  //version 1

  const router = Router();

  //test
  router.use("/main", verifyToken, main);

  //person
  router.use("/person", verifyToken, person);

  //cycle routes
  router.use("/cycle", verifyToken, cycle);

  //payment
  router.use("/payment", verifyToken, payment);

  //attendadce
  router.use("/attendance", verifyToken, attendance);

  //usercycle
  router.use("/usercycle", verifyToken, usercycle);

  //login
  router.use("/login", verifyToken, login);

  app.use(api_url, router);
}
