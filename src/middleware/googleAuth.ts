import { google } from "googleapis";
import { Request, Response } from "express";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENTID,
  process.env.GOOGLE_CLIENTSECRET,
  process.env.GOOGLE_REDIRECTURL
);

export const getGoogleAuthURL = (req: Request, res: Response) => {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  res.redirect(url);
};

export const googleAuthCallback = async (req: Request, res: Response) => {
    const code = req.query.code as string;
  
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
  
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });
  
    const userInfo = await oauth2.userinfo.get();
    console.log(userInfo)
  };
