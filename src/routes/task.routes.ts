import {Router} from "express";
import { getTaskController } from "../controllers/task.controllers.js";
const router: Router = Router();

router.get('/', getTaskController);

export default router;