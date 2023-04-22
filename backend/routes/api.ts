import express from "express";
import scoresRouter from "./scores";

const apiRouter = express.Router();

apiRouter.use("/scores", scoresRouter);

export default apiRouter;
