import express from "express";
import { registerView } from "../controllers/videoController";

const apitRouter = express.Router();

apitRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);

export default apitRouter;
