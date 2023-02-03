import { Router } from "express";
import PersonHandler from "../controller/PersonController";

const router = Router();

const personHandler = new PersonHandler();

router.get("/", personHandler.GetPerson);
router.post("/", personHandler.CreatePerson);
router.put("/:id", personHandler.UpdatePerson);
router.delete("/:id", personHandler.DeletePerson);

export default router;
