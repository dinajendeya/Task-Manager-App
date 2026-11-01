import type { RequestHandler } from "express";
import { getTaskService } from "../services/task.services.js";

export const getTaskController: RequestHandler = (_req, res) => {
    res.json(getTaskService());
};