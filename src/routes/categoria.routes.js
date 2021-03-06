import { Router } from "express";
import  {categoriaCtrl}  from "../controllers/categoria.controllers";

const router3 = Router();

router3
  .route("/")
  .post(categoriaCtrl.nuevocategoria)
  .get(categoriaCtrl.traercategoria)
  router3
  .route("/:id")
  .get(categoriaCtrl.obtenercategoria)
  .delete(categoriaCtrl.borrarcategoria)
  .put(categoriaCtrl.editarcategoria);

export default router3;