import { Request, Response, NextFunction } from "express";
import { getGoogleAuthURL } from "../middleware/googleAuth";

export const googleAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log(process.env.GOOGLE_CLIENTSECRET);
  res.status(200).send("Google Auth");
};
