import { Express, Router } from "express";

import main from "./main";

export async function useRouter(app: Express, api_url: string) {
  //version 1

  const router = Router();

  //test
  router.use("/main", main);

  //attendadce
  //attendadce routes
  console.log(api_url);
  app.use(api_url, router);
}
