import { Router } from "express";
import { googleAuth } from "../controllers/authController";
import { getGoogleAuthURL, googleAuthCallback } from "../middleware/googleAuth";

const authRouter = Router();

authRouter.get("/google-login", getGoogleAuthURL);
authRouter.get('/google/callback', googleAuthCallback);

export default authRouter;
