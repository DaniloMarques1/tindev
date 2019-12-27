import { Request, Response } from 'express';
import DevModel from '../models/Dev';

export default abstract class Dislike {
    public static async store(req: Request, res: Response): Promise<Response> {
        const { user }  = req.headers;
        const { devId } = req.params;

        const loggedDev = await DevModel.findById(user);
        const targetDev = await DevModel.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: "Dev not exists" });
        }

        if (loggedDev?.likes.includes(devId)) {
            return res.status(400).json({ error: "User has already been disliked" });
        }

        loggedDev?.dislikes.push(targetDev._id);

        await loggedDev?.save();

        return res.json(loggedDev);
    }
}