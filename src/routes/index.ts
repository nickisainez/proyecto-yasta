import { Express, Router } from "express";

import main from "./main";
import person from "./person";
import cycle from "./cycle";
import payment from "./payment";
import login from "./login";
import usercycle from "./userCycle";
import attendance from "./attendance";
import userpayments from "./userpayments";
import verifyToken from "../midlewares/verifyToken";
import count from "./count";

export async function useRouter(app: Express, api_url: string) {
  //version 1

  const router = Router();

  //test
  router.use("/main", verifyToken, main);

  //person
  router.use("/person", person);

  //cycle routes
  router.use("/cycle", verifyToken, cycle);

  //payment
  router.use("/payment", verifyToken, payment);

  //userpayments
  router.use("/userpayments", verifyToken, userpayments);

  //attendadce
  router.use("/attendance", verifyToken, attendance);

  //usercycle
  router.use("/usercycle", verifyToken, usercycle);

  //login
  router.use("/login", login);

  //Counts
  router.use("/count", count);

  app.use(api_url, router);
}
