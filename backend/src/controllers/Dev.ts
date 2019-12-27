import { Request, Response } from 'express';
import request from '../http/request';
import DevModel from '../models/Dev';

export default abstract class DevController {
    public static async store(req: Request, res: Response): Promise<Response> {
        const {username} = req.body;
        
        const userExist = await DevModel.findOne({user: username});

        if (userExist) {
            return res.json(userExist);
        }

        const response = await request.get(`/users/${username}`);
        
        const { name, bio, avatar_url: avatar } = response.data;

        const dev =  await DevModel.create({
            name,
            user: username,
            bio,
            avatar
        });
        
        return res.json(dev);
    }
     
}