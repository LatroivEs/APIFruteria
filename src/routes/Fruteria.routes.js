import { Router } from "express";
import { methods  as fruta } from "../controller/frutas";

const router = Router();

//Frutas
router.get("/Frutas",fruta.getFrutas);
router.get("/Fruta/:id",fruta.getFruta);
router.post("/addFruta",fruta.addFruta);
router.get("/delFruta/:id",fruta.deleteFruta);
router.post("/updateFruta",fruta.updateFruta);

export default router;