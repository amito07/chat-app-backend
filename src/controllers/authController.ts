import {Request, Response, NextFunction} from 'express';

export const googleAuth = (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send('Google Auth');
}