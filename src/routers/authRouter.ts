import { Router } from "express";
import { googleAuth } from "../controllers/authController";

const authRouter = Router();

authRouter.get("/login", googleAuth);

export default authRouter;
