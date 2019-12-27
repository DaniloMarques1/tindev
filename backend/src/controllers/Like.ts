import { Request, Response } from 'express';
import DevModel from '../models/Dev';

export default abstract class Like {
    public static async store(req: Request, res: Response): Promise<Response> {
        const { user }  = req.headers;        
        const { devId } = req.params;
    
        const loggedDev = await DevModel.findById(user);
        const targetDev = await DevModel.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: "Dev not exists" });
        }
        
        if (loggedDev?.likes.includes(targetDev._id)) {
            return res.status(400).json({error: "User has already been liked"})
        }

        if (targetDev.likes.includes(loggedDev?._id)) {
            console.log("MATCHHHH");
        }

        //optional chaining
        loggedDev?.likes.push(targetDev._id);
        await loggedDev?.save()

       

        return res.json(loggedDev);
    }
}